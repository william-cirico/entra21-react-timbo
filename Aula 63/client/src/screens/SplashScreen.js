import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export function SplashScreen() {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
});