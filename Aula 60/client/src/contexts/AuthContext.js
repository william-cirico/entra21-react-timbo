import { authServices } from "../services/auth";
import { createContext, useEffect, useReducer } from "react"; 

export const AuthContext = createContext();

const initialState = {        
    refreshToken: localStorage.getItem("refresh-token") || "",
    role: localStorage.getItem("role") || ""
};

function reducer(prevState, action) {
    switch (action.type) {        
        case "SIGN_IN":
            return {
                ...prevState,                          
                refreshToken: action.refreshToken,
                role: action.role
            }
        case "SIGN_OUT":
            return {
                ...prevState,                
                refreshToken: null,
                role: null
            }
        default:
            return prevState            
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        const accessToken = localStorage.getItem("access-token");
        const refreshToken = localStorage.getItem("refresh-token");

        async function verifyToken(accessToken) {
            try {
                const { role } = await authServices.verify(accessToken);
                
                dispatch({ type: "SIGN_IN", refreshToken, role });

                console.log("Access-Token válido");
            } catch (error) {
                console.log(error.message);
                try {
                    const { newAccessToken, newRefreshToken, role } = await authServices.refresh(refreshToken);
                    
                    localStorage.setItem("access-token", newAccessToken);
                    localStorage.setItem("refresh-token", newRefreshToken);
                    localStorage.setItem("role", role);

                    dispatch({ type: "SIGN_IN", newRefreshToken, role });
                } catch (error) {
                    console.log(error);
                    localStorage.clear();
                    dispatch({ type: "SIGN_OUT" });
                }                
            }                                    
        }

        if (accessToken) {
            verifyToken(accessToken);
        }
    }, []);

    async function signIn(email, password) {
        const { accessToken, refreshToken, role } = await authServices.login(email, password);
        
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("refresh-token", refreshToken);
        localStorage.setItem("role", role);
        
        dispatch({
            type: "SIGN_IN",            
            refreshToken,
            role
        });    
    }

    async function signOut() {
        localStorage.removeItem("token");

        dispatch({ type: "SIGN_OUT" });
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, role: state.role }}>
            { children }
        </AuthContext.Provider>
    );
}