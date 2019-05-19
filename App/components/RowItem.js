import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#36B1F0',
        marginBottom: 1,
    },
    text: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600'
    }
});

export const RowItem = ({ onPress = () => {}, text, color }) => (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8} >
        <View style={[styles.row, { backgroundColor: color } ]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);