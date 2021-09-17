import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function PrimeiroComponente() {

    const handleClick = () => {
        alert("Olá mundo");
    }

    // function handleClick() {
    //     alert("Olá mundo!");
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meu primeiro componente</Text>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.4} 
                onPress={() => alert("Olá mundo!")}
            >
                <Text style={styles.buttonText}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white"
    },
    button: {
        margin: 10,
        backgroundColor: "black",
        padding: 20
    },
    buttonText: {
        color: "white"
    }
});