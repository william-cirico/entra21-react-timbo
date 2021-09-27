import React, { useState } from "react";
import { StyleSheet, Modal, View, Alert } from "react-native";
import { Button, IconButton, TextInput, useTheme } from "react-native-paper";
import { DatePicker } from "../components/DatePicker";
import { useTodo } from "../contexts/TodoContext";
import { showErrorMessage } from "../utils/errorMessages";

export function AddUpdateTodo(props) {    
    const [task, setTask] = useState(props.todo?.task || "");
    const [expirationDate, setExpirationDate] = useState(props.todo?.expirationDate ? new Date(props.todo.expirationDate) : new Date());    
    const [loading, setLoading] = useState(false);

    const { todoActions } = useTodo();
    
    const { colors } = useTheme();

    async function handleAddTodo() {
        setLoading(true);
        try {
            todoActions.create(task, expirationDate);            
            props.closeModal();
        } catch (err) {            
            showErrorMessage(err, "Falha", "Não foi possível adicionar o Todo.");
            setLoading(false);
        }
    }

    async function handleEditTodo() {
        setLoading(true);
        try {
            todoActions.update({id: props.todo.id, task, expirationDate});            
            props.closeModal();
        } catch (err) {
            showErrorMessage(err, "Falha", "Não foi possível adicionar o Todo.");
            setLoading(false);
        }
    }
       
    return (
        <Modal 
        visible={props.visible}
        animationType="slide"
        transparent={true}
    >            
       <View style={styles.centeredView}>                
            <View style={styles.modalView}>
            <IconButton 
                    icon="close-circle" size={36} 
                    color={colors.primary} 
                    style={styles.closeButton} 
                    onPress={props.closeModal}
                />
                <TextInput mode="outlined" label="Tarefa" value={task} onChangeText={setTask} />
                <DatePicker date={expirationDate} setDate={setExpirationDate} />
                { props.todo
                    ?   <Button 
                            icon="pencil" 
                            mode="contained"
                            loading={loading}
                            disabled={loading}
                            onPress={handleEditTodo}
                        >
                            Editar todo
                        </Button>
                    :   <Button 
                            icon="plus" 
                            mode="contained"
                            loading={loading}
                            disabled={loading}
                            onPress={handleAddTodo}
                        >
                            Adicionar todo
                        </Button>
                }                                
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
    closeButton: {
        alignItems: "flex-end",
        alignSelf: "flex-end",        
        margin: 0               
    }
});