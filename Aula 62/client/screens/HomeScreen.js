import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import colors from "../theme/colors";

export function HomeScreen() {
    const { memoContext } = useAuth();    

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button text="Log Out" onPress={() => memoContext.signOut()}
            />
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