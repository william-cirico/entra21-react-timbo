import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/Button";
import { ValidationInput } from "../components/ValidationInput";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../theme/colors";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";
import { showErrorMessage } from "../utils/errorHandlers";

const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,       
}

export function SignInScreen({ navigation }) {
    const { memoContext } = useAuth();    
    const [state, setState] = useState(initialState);
    
    useEffect(() => {        
        setState(prevState => ({
            ...prevState, 
            isLoginValid: prevState.isEmailValid && prevState.isPasswordValid
        }));
    }, [state.isEmailValid, state.isPasswordValid]);

    async function handleSignIn() {
        setState(prevState => ({ ...prevState, isLoading: true }));
        try {            
            await memoContext.signIn(state.email, state.password);
        } catch (err) {
            setState(prevState => ({ 
                ...prevState, 
                isLoading: false,                 
                emailError: true,                
                passwordError: true
            }));
            showErrorMessage(err);
        }        
    }

    function handleNavigateSignUpScreen() {
        setState(initialState);
        navigation.push("SignUp");
    }

    return (            
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Loader isVisible={state.isLoading} />
            <MaterialIcons name="add-task" size={200} color={colors.primary} />
            <ValidationInput 
                value={state.email}
                onChangeText={text => handleEmailChange(text, setState)}
                placeholder="Seu e-mail"
                labelText="E-mail"
                keyboardType="email-address"
                isValid={state.isEmailValid} />
            
            <ValidationInput 
                value={state.password}
                onChangeText={text => handlePasswordChange(text, setState)}
                placeholder="Sua senha"
                labelText="Senha"
                secureTextEntry={true}
                isValid={state.isPasswordValid} />
            <TouchableOpacity onPress={handleNavigateSignUpScreen}>
                <Text>Não tem conta ainda? Cadastre-se</Text>
            </TouchableOpacity>   
            <View style={{ width: "100%", margin: 10 }}>
                <Button 
                    text="Login" 
                    onPress={handleSignIn}
                    disabled={!state.isLoginValid}/>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
});