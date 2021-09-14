import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "../../components/Button";

export function DetailsScreen({ route, navigation }) {
    const { itemId, description } = route.params;    

    return (
        <View style={styles.container}>
            <Text>Tela de detalhes</Text>  
            <Text>ID do produto: {itemId}</Text>
            <Text>Descrição: {description}</Text>
            <Button text="Ir para tela de detalhes" onPress={() => navigation.push("Details", { itemId: 2 })} />
            <Button text="Ir para a home" onPress={() => navigation.navigate("Home")} />
            <Button text="Voltar" onPress={() => navigation.goBack()} />
            <Button text="Voltar para a primeira tela do App" onPress={() => navigation.popToTop()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',        
        justifyContent: 'center',
        padding: 20
    },
});
