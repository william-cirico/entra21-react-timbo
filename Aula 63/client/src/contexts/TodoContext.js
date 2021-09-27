import React, { useEffect, useMemo, useReducer } from "react";
import { SplashScreen } from "../screens/SplashScreen";
import { api } from "../services";
import { useAuth } from "./AuthContext";

const TodoContext = React.createContext();

const initialState = {
    todos: [],
    isLoading: true
}

function reducer(prevState, action) {
    switch(action.type) {
        case "GET_TODOS":
            return {
                ...prevState,
                todos: action.payload,
                isLoading: false
            }
        case "CREATE_TODO":             
            return {
                ...prevState,
                todos: [
                    action.payload,
                    ...prevState.todos
                ]
            }
        case "REMOVE_TODO":
            return {
                ...prevState,
                todos: prevState.todos.filter(todo => todo.id !== action.payload)
            }        
        case "UPDATE_TODO":
            return {
                ...prevState,
                todos: prevState.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.task = action.payload.task;
                        todo.expirationDate = action.payload.expirationDate;
                    }

                    return todo;
                })
            }
        case "TOGGLE_TODO": 
            return {
                ...prevState,
                todos: prevState.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completedAt = todo.completedAt ? null : new Date()
                    }

                    return todo;
                })
            }
    }
}

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const auth = useAuth();

    useEffect(() => {        
        async function getTodos() {
            let todos;

            try {
                todos = (await api.get("/todos")).data;                                 
            } catch (err) {                
                if (err.response?.status === 401) {
                    auth.memoContext.signOut();
                }                                
            }                    
            
            dispatch({ type: "GET_TODOS", payload: todos });
        }

        getTodos();        
    }, [auth.state.accessToken]);

    function handleAuthError(err) {
        if (err.response?.status === 401) {
            auth.memoContext.signOut();
        }
    }


    const todoActions = useMemo(() => ({
        create: async function(task, expirationDate) {
            try {                
                const todo = (await api.post("/todos", { task, expirationDate })).data;                

                dispatch({ type: "CREATE_TODO", payload: todo });
            } catch (err) {
                handleAuthError(err);
                throw err;                
            }
        },
        update: async function(todo) {
            try {
                dispatch({ type: "UPDATE_TODO", payload: todo });

                await api.put(`/todos/${todo.id}`, todo);                
            } catch (err) {
                handleAuthError(err);
                throw err;
            }
        },
        toggleTodo: async function(todoId) {
            try {
                dispatch({ type: "TOGGLE_TODO", payload: todoId });
                
                await api.put(`/todos/${todoId}/toggle`);                
            } catch (err) {
                handleAuthError(err);
                throw err;
            }
        },
        removeTodo: async function(todoId) {
            try {
                dispatch({ type: "REMOVE_TODO", payload: todoId });
                
                await api.delete(`/todos/${todoId}`);                
            } catch (err) {
                handleAuthError(err);
                throw err;
            }
        }
     }));
    

    if (state.isLoading) {
        return <SplashScreen />
    }

    return (
        <TodoContext.Provider value={{ state, todoActions }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodo = () => React.useContext(TodoContext);