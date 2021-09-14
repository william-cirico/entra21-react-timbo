import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>
            <Button 
                text="Ir para a tela de detalhes" 
                onPress={() => {
                    navigation.navigate("Details", { 
                        itemId: 1, 
                        description: "Computador Gamer" 
                    })} 
                }
            />  
            <Button
                text="Ir para a tela de Perfil de Cliente"
                onPress={() => {
                    navigation.navigate("Profile", {
                        screenTitle: "Perfil de Cliente"
                    })
                }}
            />
            <Button
                text="Ir para a tela de Perfil de Funcionário"
                onPress={() => {
                    navigation.navigate("Profile", {
                        screenTitle: "Perfil de Funcionário"
                    })
                }}
            />          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',    
        justifyContent: 'center',
        padding: 20,        
    },    
});