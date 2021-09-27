import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator, FAB, IconButton, useTheme } from "react-native-paper";
import { Todo } from "../components/Todo";
import { useAuth } from "../contexts/AuthContext";
import { useTodo } from "../contexts/TodoContext";
import { api } from "../services";
import { showErrorMessage } from "../utils/errorMessages";
import { AddUpdateTodo } from "./AddUpdateTodoScreen";

export function HomeScreen({ navigation }) {
    const { todos } = useTodo().state;    
    const [showModal, setShowModal] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);    
    
    const { colors } = useTheme();

    function showUpdateModal(todo) {             
        setCurrentTodo(todo);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setCurrentTodo(null);
    }

    return (
        <View style={styles.container}>
            { showModal &&
                <AddUpdateTodo 
                    visible={true}                
                    closeModal={closeModal}
                    todo={currentTodo}
                /> 
            }

            <IconButton
                icon="menu"
                size={40}    
                color={colors.primary}    
                style={{ alignSelf: "flex-end" }}        
                onPress={() => navigation.openDrawer()}
            />                        
            <MaterialIcons name="add-task" size={200} color={colors.primary} style={styles.logo} />   
            <View style={styles.todoList}>                                    
                <FlatList 
                    ListEmptyComponent={<Text style={styles.emptyListText}>Você não possui nenhuma tarefa</Text>}             
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo 
                            {...item}                                  
                            editTodo={() => showUpdateModal({...item})}                      
                        />
                    )}
                    keyExtractor={item => item.id}
                />                           
            </View>
            <FAB 
                icon="plus"                
                style={styles.addButon}  
                onPress={() => setShowModal(true)}              
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {            
        backgroundColor: "#f5f5f5",
        flex: 1,
        padding: 20,        
    },
    addButon: {
        position: "absolute",
        bottom: 30,
        right: 20.        
    },
    logo: {
        textAlign: "center", 
        textAlignVertical: "center",                    
    },
    todoList: {
        flex: 1,                
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,          
        marginBottom: 80,                
    },
    emptyListText: {
        fontSize: 18,
        textAlign: "center"        
    },
});