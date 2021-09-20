import React from "react";
import { api } from "../services/api";
import * as SecureStore from "expo-secure-store";

const AuthContext = React.createContext();

const initialState = {
    isLoading: true,
    accessToken: null
}

function reducer(prevState, action) {
    switch(action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                accessToken: action.token,
                isLoading: false
            }
        case "SIGN_IN":
            return {
                ...prevState,
                accessToken: action.token
            }
        case "SIGN_OUT":
            return {
                ...prevState,
                accessToken: null
            }
    }
}

export const useAuth = () => React.useContext(AuthContext);

export function AuthProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        async function restoreToken() {
            let accessToken;

            try {
                accessToken = await SecureStore.getItemAsync("access-token");

                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            } catch (err) { 
                console.log(err);
            }

            dispatch({ type: "RESTORE_TOKEN", token: accessToken });            
        }

        restoreToken();
    }, []);

    const memoContext = React.useMemo(() => ({
        signIn: async (email, password) => {
            try {                                                
                const accessToken = (await api.post("/auth/login", { email, password })).data;                

                await SecureStore.setItemAsync("access-token", accessToken);
                
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

                dispatch({ type: "SIGN_IN", token: accessToken });
            } catch (err) {
                console.log(err);
                throw err;                           
            }            
        },
        signUp: async (user) => {
            try {                                                        
                await api.post("/users", { ...user });                                                                                
            } catch (err) {
                console.log(err);
                throw err;                           
            }         
        },
        signOut: () => {
            try {
                SecureStore.deleteItemAsync("access-token");
            } catch (err) {
                console.log(err);
            }

            dispatch({ type: "SIGN_OUT" });
        }
    }), []);

    return (
        <AuthContext.Provider value={{ state, memoContext}}>
            { children }
        </AuthContext.Provider>
    );
}