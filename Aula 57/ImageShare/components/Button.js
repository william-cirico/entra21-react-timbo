import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button(props) {
    return (
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
});

