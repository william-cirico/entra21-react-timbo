import React, {useState} from 'react';
import { View, Platform, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import moment from 'moment';

export function TimePicker(props) {  
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    props.setDate(currentDate);    
  };

  const dateString = moment(props.date).format("ddd, D [de] MMMM [de] YYYY");

  return (
    <View>    
      <TouchableOpacity onPress={() => setShow(true)} style={styles.button}>
          <Text>{dateString}</Text>
          <Fontisto name="date" size={24} color="black" />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {    
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 4,
    marginBottom: 10,
  }
});