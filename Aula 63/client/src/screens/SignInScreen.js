import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "../theme";
import { emailRegExp } from "../utils/regExpValidations";
import { useAuth } from "../contexts/AuthContext";
import { showErrorMessage } from "../utils/errorMessages";

export function SignInScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    const { memoContext } = useAuth(); 

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    }

    async function signIn() {        
        if (hasErrors()) {
            return Alert.alert("Falha ao logar", "Preencha os campos adequadamente");
        }   
        
        setLoading(true);
        try {            
            await memoContext.signIn(email, password);
        } catch (err) {            
            setLoading(false);
            showErrorMessage(err, "Falha ao logar", "Não foi possível fazer o login, tente novamente mais tarde!");            
        }        
    }

    function hasErrors() {
        let errors;

        const emailValidation = !emailRegExp.test(email);
        const passwordValidation = password.length < 6;

        setEmailInvalid(emailValidation);
        setPasswordInvalid(passwordValidation);
        
        if (emailValidation || passwordValidation) {
            errors = true;
        }
        
        return errors;
    }

    function handleNavigateToSignUpScreen() {
        setEmail("");
        setPassword("");
        setEmailInvalid(false);
        setPasswordInvalid(false);
        navigation.push("SignUp");
    }

    return (
        <View style={styles.container}>                     
            <MaterialIcons name="add-task" size={200} color={theme.colors.primary} style={styles.logo} />
            <TextInput
                label="E-mail"       
                value={email}                 
                error={emailInvalid}             
                keyboardType="email-address"       
                onChangeText={text => setEmail(text)}                        
            />
            <HelperText type="error" visible={emailInvalid}>
                E-mail inválido
            </HelperText>
            <TextInput
                label="Senha"
                value={password}                
                error={passwordInvalid} 
                onChangeText={text => setPassword(text)}                
                secureTextEntry={passwordVisible}                                
                right={<TextInput.Icon name="eye" onPress={togglePasswordVisibility} />}
            />
            <HelperText type="error" visible={passwordInvalid}>
                Senha inválida
            </HelperText>
            <Button 
                labelStyle={styles.buttonText}
                onPress={handleNavigateToSignUpScreen}
            >Não possui uma conta? Cadastrar-se</Button>
            <Button 
                icon="login-variant"
                mode="contained" 
                onPress={signIn}  
                loading={loading}
                disabled={loading}               
                style={styles.loginButton}
            >Entrar</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {            
        backgroundColor: "#f5f5f5",
        flex: 1,
        padding: 20,
        justifyContent: "center"
    },
    logo: {
        textAlign: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 10   
    },
    loginButton: {
        marginTop: 30,
        padding: 10
    }
});