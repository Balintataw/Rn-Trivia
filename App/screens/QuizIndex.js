import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import spaceQuestions from '../data/space';
import westernQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import { RowItem } from '../components/RowItem';

export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="light-content" />
        <RowItem 
            text="Space" 
            color="#36B1F0" 
            onPress={() => navigation.navigate('Quiz', { title: 'Space', questions: spaceQuestions, color:"#36B1F0" })} />
        <RowItem    
            text="Westerns" 
            color="#799496" 
            onPress={() => navigation.navigate('Quiz', { title: 'Westerns', questions: westernQuestions, color:"#799496" })} />
        <RowItem 
            text="Computers" 
            color="#49475B" 
            onPress={() => navigation.navigate('Quiz', { title: 'Computers', questions: computerQuestions, color:"#49475B" })} />
    </ScrollView>
);