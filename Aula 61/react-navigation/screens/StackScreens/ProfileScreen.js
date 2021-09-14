import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela de Perfil</Text>     
            <Button text="Atualizar o título" onPress={() => navigation.setOptions({ title: "Título atualizado!" }) }/>                   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',    
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,        
    },    
});