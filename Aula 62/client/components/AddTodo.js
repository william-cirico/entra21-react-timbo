import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Button } from "./Button";
import { TimePicker } from "./TimePicker";
import { FontAwesome } from '@expo/vector-icons';

export function AddTodo(props) {
    const [task, setTask] = useState("");    
    const [expirationDate, setExpirationDate] = useState(new Date());

    return (
        <Modal 
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >            
           <View style={styles.centeredView}>                
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton} onPress={props.closeModal}>
                        <FontAwesome name="times" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} 
                        placeholder="Informe a Descrição..."
                        onChangeText={text => setTask(text)}
                        value={task} />
                    <TimePicker date={expirationDate} setDate={setExpirationDate} />
                    <Button text="Adicionar tarefa" onPress={() => props.addTodo(task, expirationDate)}/>
                </View>            
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",            
        backgroundColor: "#00000040",
        padding: 10
    },
    modalView: {        
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    header: {                        
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    input: {        
        height: 40,
        paddingLeft: 5,        
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#E3E3E3',
        borderRadius: 4
    },
    closeButton: {
        alignSelf: "flex-end"
    }
});