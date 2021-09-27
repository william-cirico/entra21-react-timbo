import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import icon from "../assets/icon.png"
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

export function DrawerMenu(props) {
    const { memoContext } = useAuth();
    const { user } = useUser().state;
    
    const imageSource = user?.avatar ? {uri: user.avatar} : icon;

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.containerProfile}>
                <Avatar.Image size={128} source={imageSource} />
                <Text style={styles.name}>{user?.name}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>
            <DrawerItem
                label="Log out"
                icon={({ size }) => <Ionicons name="exit-outline" size={size} />}
                onPress={memoContext.signOut}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    containerProfile: {
        backgroundColor: "#ddd",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20
    }
});