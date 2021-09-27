import React, { useState } from 'react';
import { View, Platform, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import moment from 'moment';
import { theme } from "react-native-paper";

export function DatePicker(props) {
    const [date, setDate] = useState(props.date);        
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
        setShowTime(true);
    };

    function onChangeTime(event, selectedTime) {
        const time = selectedTime || date;
        setShowTime(Platform.OS === 'ios');                  
        props.setDate(time);
    }

    const dateString = moment(props.date).format("D [de] MMMM - HH:mm");

    return (
        <>
            <TouchableOpacity onPress={() => setShowDate(true)} style={styles.button}>
                <Text style={styles.buttonText}>{dateString}</Text>
                <Fontisto name="date" size={24} color="black" />
            </TouchableOpacity>
            {showDate && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}
            {showTime && (
                <DateTimePicker
                    testID="timePicker"
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTime}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f5f5f5",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 4,
        marginVertical: 20
    },
    buttonText: {
        color: "#666"
    }
});