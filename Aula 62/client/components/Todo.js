import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import moment from 'moment';
import 'moment/locale/pt-br';

export function Todo(props) {
    const doneOrNotStyle = props.completedAt ? 
        { textDecorationLine: 'line-through' } : {}

    const date = props.completedAt ? props.completedAt : props.expirationDate;
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right}
                onPress={() => props.deleteTodo(props.id)}>
                <FontAwesome name="trash" size={30} color="#FFF" />                
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <FontAwesome name="trash" size={20} color="#FFF" style={styles.excludeIcon} />                
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }

    return (
        <Swipeable 
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.deleteTodo(props.id)}>
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => props.completeTodo(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.completedAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.task}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

function getCheckView(completedAt) {
    if(completedAt) {
        return (
            <View style={styles.done}>
                <FontAwesome name='check' size={20} color='#FFF' />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {        
        color: "black",
        fontSize: 15
    },
    date: {
        color: "black",
        fontSize: 12
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeIcon: {
        marginLeft: 10
    },
    excludeText: {
        color: '#FFF',
        fontSize: 20,
        margin: 10
    }
})