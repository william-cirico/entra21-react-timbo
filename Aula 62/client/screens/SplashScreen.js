import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import colors from "../theme/colors";

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
});