import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../theme/colors";
import size from "../theme/fonts";

export function Button({text, ...rest}) {
    return (
        <TouchableOpacity 
            style={[styles.button, rest.disabled ? { backgroundColor: "#ccc" }: {}]} 
            activeOpacity={.8} 
            {...rest}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,                
        color: "white",
        padding: 15,
        borderRadius: 4,        
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: size.button,
    }
});