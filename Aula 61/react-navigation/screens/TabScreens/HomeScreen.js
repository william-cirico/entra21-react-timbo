import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>            
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