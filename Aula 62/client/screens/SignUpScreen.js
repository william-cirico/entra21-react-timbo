import React, { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Loader } from "../components/Loader";
import { ValidationInput } from "../components/ValidationInput";
import { useAuth } from "../contexts/AuthContext";
import colors from "../theme/colors";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { showErrorMessage } from "../utils/errorHandlers";

const initialState = {
    name: "",
    isNameValid: false,
    email: "",
    isEmailValid: false,
    password: "",    
    isPasswordValid: false,
    confirmPassword: "",
    isConfirmPasswordValid: false,
    isRegisterValid: false,
    isLoading: false
}

export function SignUpScreen({ navigation }) {
    const { memoContext } = useAuth();
    const [state, setState] = useState(initialState);
    
    useEffect(() => {        
        const validations = [ 
            state.isEmailValid,
            state.isNameValid,
            state.isPasswordValid,
            state.isConfirmPasswordValid
        ];

        const isRegisterValid = validations.reduce((previousValue, currentValue) => previousValue && currentValue);

        setState(prevState => ({
            ...prevState, 
            isRegisterValid: isRegisterValid
        }));
    }, [state.isNameValid, state.isEmailValid, state.isPasswordValid, state.isConfirmPasswordValid]);

    function handleNameChange(text) {
        if (text.trim().length >= 4) {
            setState(prevState => ({
                ...prevState, 
                name: text, 
                isNameValid: true 
            }));
        } else {
            setState(prevState => ({
                ...prevState, 
                name: text, 
                isNameValid: false 
            }));
        }
    }

    function handleConfirmPasswordChange(text) {
        if (text.trim() === state.password) {
            setState(prevState => ({
                ...prevState, 
                confirmPassword: text, 
                isConfirmPasswordValid: true 
            }));
        } else {
            setState(prevState => ({
                ...prevState, 
                confirmPassword: text, 
                isConfirmPasswordValid: false
            }));
        }
    }

    async function handleSignUp() {
        setState(prevState => ({ ...prevState, isLoading: true }));
        try {
            const user = {
                name: state.name,
                email: state.email,
                password: state.password
            }

            await memoContext.signUp(user);
            Alert.alert("Sucesso!", "Usuário criado com sucesso!");
            navigation.navigate("SignIn");
        } catch (err) {
            setState(prevState => ({ 
                ...prevState, 
                isLoading: false,                
            }));
            showErrorMessage(err);
        }        
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={"height"}>
            <Loader isVisible={state.isLoading} />
            <ValidationInput 
                value={state.name}
                onChangeText={text => handleNameChange(text)}
                placeholder="Seu nome"
                labelText="Nome"                
                isValid={state.isNameValid} />
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
            <ValidationInput 
                value={state.confirmPassword}
                onChangeText={text => handleConfirmPasswordChange(text)}
                placeholder="Confirme a senha"
                labelText="Confirmar a senha"
                secureTextEntry={true}
                isValid={state.isConfirmPasswordValid} />            
            <Button 
                text="Cadastrar-se" 
                onPress={handleSignUp}
                disabled={!state.isRegisterValid} />
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