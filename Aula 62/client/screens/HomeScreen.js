import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import colors from "../theme/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { Todo } from "../components/Todo";
import axios from "axios";
import { Loader } from "../components/Loader";

export function HomeScreen() {
    const { memoContext } = useAuth();   
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const req = axios.CancelToken.source();

        async function loadTodos() {
            try {
                const fetchedTodos = (await api.get("/todos", { cancelToken: req.token })).data;
    
                setTodos(fetchedTodos);
                setIsLoading(false);
            } catch (err) {
                handleAuthenticationError(err);                
            }     
        }  

        loadTodos();

        return () => req.cancel();
    }, []);

    function handleAuthenticationError(err) {
        console.log(err);
        if (err.status === 401) {
            memoContext.signOut();
        }
    }

     

    async function addTodo(task, expirationDate) {
        setIsLoading(true);
        try {
            const todo = (await api.post("/todos", { task, expirationDate })).data;            
            setTodos([todo, ...todos]);
            setShowModal(false);
        } catch (err) {
            handleAuthenticationError(err);
        }
        setIsLoading(false);
    }

    async function completeTodo(todoId) {
        const todo = todos.find(todo => todo.id === todoId);
        
        try {
            api.put(`/todos/${todoId}`, {
                task: todo.task,
                completedAt: todo.completedAt ? null : Date.now(),                
            });

            const updatedTodos = todos.map(todo => {
                if (todo.id === todoId) {
                    todo.completedAt = todo.completedAt ? null : Date.now()
                }
                return todo;
            });

            setTodos(updatedTodos);
        } catch (err) {
            handleAuthenticationError(err);  
        }
    }

    async function deleteTodo(todoId) {
        try {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);

            await api.delete(`/todos/${todoId}`);            
        } catch (err) {
            handleAuthenticationError(err);
        }
    }

    return (
        <View style={styles.container}>
            <Loader isVisible={isLoading} />
            <AddTodo visible={showModal} closeModal={() => setShowModal(false)} addTodo={addTodo} />
            <TouchableOpacity style={styles.closeButton}>
                <MaterialIcons name="close" size={30} color={colors.primary} onPress={() => memoContext.signOut()}/>
            </TouchableOpacity>            
            <MaterialIcons name="add-task" size={200} color={colors.primary} style={styles.logo} />   
            {
                todos.length > 0 ?
                <FlatList                 
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo {...item} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                    )}
                    keyExtractor={item => item.id}
                /> :
                <View style={styles.todoList}>
                    <Text>Você não possui nenhuma tarefa</Text>
                </View>
            }                    
            
            <Button text="Cadastrar tarefa" onPress={() => setShowModal(true)} />             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,      
        justifyContent: 'center',               
        padding: 10
      },
    closeButton: {
        alignSelf: "flex-end",
        marginTop: StatusBar.currentHeight
    },  
    logo: {
        textAlign: "center",        
    },
    todoList: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});