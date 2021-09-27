import React, { useEffect, useRef, useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from "../theme/colors";
import size from "../theme/fonts";

export function ValidationInput({labelText, isValid, ...rest}) {      
    return (
        <>
            <Text style={styles.label}>{labelText}</Text>
            <View style={styles.containerInput}>            
                <TextInput 
                    {...rest}
                    style={styles.input}  
                />                  
                { isValid && <AntDesign name="checkcircle" style={styles.icon} size={24} color={colors.check} /> }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerInput: { 
        width: "100%",       
        flexDirection: "row",
        alignItems: "center",        
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20
    },
    label: {
        alignSelf: "flex-start",
        fontSize: size.label,        
    },
    input: {        
        fontSize: size.input,
        flex: 1,        
        padding: 10        
    },
    icon: {                
        paddingRight: 5
    }
});