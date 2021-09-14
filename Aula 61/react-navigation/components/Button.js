import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 10,
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    }
});