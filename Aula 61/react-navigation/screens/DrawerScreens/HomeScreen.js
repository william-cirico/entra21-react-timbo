import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hooks</Text>
            <Button 
                text="useState" 
                onPress={() => {navigation.navigate("UseState")}}
            />  
            <Button
                text="useEffect"
                onPress={() => {navigation.navigate("UseEffect")}}
            />
            <Button
                text="useRef"
                onPress={() => {navigation.navigate("UseRef")}}
            />
            <Button
                text="useContext"
                onPress={() => {navigation.navigate("UseContext")}}
            />          
            <Button
                text="useReducer"
                onPress={() => {navigation.navigate("UseReducer")}}
            />
            <Button
                text="useCallback"
                onPress={() => {navigation.navigate("UseCallback")}}
            />
            <Button
                text="useMemo"
                onPress={() => {navigation.navigate("UseMemo")}}
            />          
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