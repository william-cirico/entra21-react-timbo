import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function ComponentePai({ children, title }) {
    return (
        <View>
            <Text>{title}</Text>
            {children}
        </View>
    );
}