import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela de detalhes</Text>          
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
