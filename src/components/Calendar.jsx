import React, { useState } from 'react';
import { View, Button, Platform, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.inputStyleRegister}
                placeholder="Fecha de nacimiento"
                value={date.toLocaleDateString('es-AR')}
                onChangeText={(text) => setDate(text)}
            />
            <View>
                <Button onPress={showDatepicker} title="Mostrar Calendario" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    inputStyleRegister: {
        marginBottom: 20,
        fontSize: 15,
        borderBottomWidth: 1,
        marginRight: 20
    } });