import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Alert, ScrollView } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { emailRegExp } from "../utils/regExpValidations";
import * as ImagePicker from "expo-image-picker";
import { api } from "../services";
import { showErrorMessage } from "../utils/errorMessages";
import { useAuth } from "../contexts/AuthContext";

const initialState = {
    name: "",
    nameInvalid: false,
    email: "",
    emailInvalid: false,
    password: "",
    passwordInvalid: false,
    confirmPassword: "",
    confirmPasswordInvalid: false,
    selectedImage: null,
    loading: false
};

export function SignUpScreen({ navigation }) {
    const { memoContext } = useAuth(); 

    const [state, setState] = useState(initialState);

    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

    function hasErrors() {
        setState(prevState => ({ 
            ...prevState,
            nameInvalid: false,
            emailInvalid: false,
            passwordInvalid: false,
            confirmPasswordInvalid: false
        }));
        let erros = []

        if (state.name.length < 4) {
            erros.push("nameInvalid");
        }

        if (!emailRegExp.test(state.email)) {
            erros.push("emailInvalid");
        }

        if (state.password.length < 6) {
            erros.push("passwordInvalid");
        }

        if (state.confirmPassword !== state.password || state.confirmPassword.length < 6) {
            erros.push("confirmPasswordInvalid");
            console.log("a")
        }
        
        erros.forEach(erro => setState(prevState => ({ ...prevState, [erro]: true })));

        return erros.length > 0;
    }

    async function handleRegister() {        
        if (hasErrors()) {
            return Alert.alert("Erro ao cadastrar o usuário", "Preencha os campos adequadamente");
        }

        try {
            setState({...state, loading: true});
            const user = createFormData(
                state.selectedImage,
                {
                    name: state.name, 
                    email: state.email, 
                    password: state.password
                }                 
            );

            await memoContext.signUp(user);
            Alert.alert("Sucesso", "Usuário criado com sucesso!");
            navigation.navigate("SignIn");
        } catch (err) {            
            showErrorMessage(err, "Falha ao criar o usuário", "Aconteceu uma falha ao criar o usuário, tente novamente mais tarde");
            setState({...state, loading: false});
        }
    }

    function createFormData(image, body = {}) {
        const data = new FormData();    

        if (image) {         
            let imageExtension = image.uri.split(".");
            imageExtension = imageExtension[imageExtension.length - 1];    
            const type = `image/${imageExtension}`;

            data.append("avatar", {
                uri: image.uri,
                type,
                name: `user-avatar.${imageExtension}`
            });
        }
        
        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        return data;
    }

    async function openImagePicker() {
        const permissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionsResult.granted === false) {
            alert("É necessário conceder a permissão de acesso a galeria");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({ 
            mediaTypes: "Images",
            aspect: [4, 3],
            quality: 1
        });  
                
        setState({ ...state, selectedImage: pickerResult.cancelled ? null : pickerResult });
    }

    return (                
        <ScrollView>
            <View style={styles.container}>
            <TextInput
                label="Nome"       
                value={state.name}                  
                error={state.nameInvalid}
                name="name"             
                keyboardType="email-address"       
                onChangeText={text => setState({...state, name: text})}                        
            />
            <HelperText type="error" visible={state.nameInvalid}>
                Nome inválido
            </HelperText>
            <TextInput
                label="E-mail"       
                value={state.email}                  
                error={state.emailInvalid}             
                keyboardType="email-address"       
                onChangeText={text => setState({...state, email: text})}                        
            />
            <HelperText type="error" visible={state.emailInvalid}>
                E-mail inválido
            </HelperText>
            <TextInput
                label="Senha"
                value={state.password}                
                error={state.passwordInvalid} 
                onChangeText={text => setState({...state, password: text})}                
                secureTextEntry={passwordVisible}                                
                right={<TextInput.Icon name="eye" onPress={() => setPasswordVisible(!passwordVisible)} />}
            />
            <HelperText type="error" visible={state.passwordInvalid}>
                Senha inválida
            </HelperText>
            <TextInput
                label="Confirmar senha"
                value={state.confirmPassword}                
                error={state.confirmPasswordInvalid} 
                onChangeText={text => setState({...state, confirmPassword: text})}                
                secureTextEntry={confirmPasswordVisible}                                
                right={<TextInput.Icon name="eye" onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
            />            
            <HelperText type="error" visible={state.confirmPasswordInvalid}>
                Confirmação de senha inválida
            </HelperText>
            { 
                state.selectedImage 
                ? <Button labelStyle={{ color: "white" }} style={styles.button} color="#42f5ad" icon="check-circle" mode="contained" onPress={openImagePicker}>Imagem selecionada</Button> 
                : <Button mode="contained" onPress={openImagePicker} style={styles.button}>Adicionar uma imagem</Button>
            }
            
            <Button 
                mode="contained"
                icon="account-plus-outline"
                onPress={handleRegister} 
                style={styles.registerButton}
                loading={state.loading}
                disabled={state.loading}
                >Cadastrar-se</Button>
            </View>
        </ScrollView>        
    );
}

const styles = StyleSheet.create({
    container: {        
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
        paddingTop: 50
    },
    button: {
        marginBottom: 30
    },
    registerButton: {
        padding: 10
    }  
});