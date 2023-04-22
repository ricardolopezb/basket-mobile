import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MatchesScreen } from "./src/screens/MatchesScreen"
import { TabView, TabBar } from 'react-native-tab-view';
import {PlayersScreen} from "./src/screens/PlayersScreen"; // Importar el componente TabBar

const renderScene = ({ route }) => {
    switch (route.key) {
        case 'matches':
            return <MatchesScreen />;
        case 'players':
            return <PlayersScreen />;
    }
};

export default function App() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'matches', title: 'Matches' },
        { key: 'players', title: 'Players' },
    ]);
    return (
        <TabView
            style={styles.container}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#FFD700' }}
                    style={{ backgroundColor: '#0E294B' }}
                    labelStyle={{ color: 'white' ,fontSize:18,fontWeight:"bold"}}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    }
})


