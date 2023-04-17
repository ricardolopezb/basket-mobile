import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/screens/Home"
import { TabView, TabBar } from 'react-native-tab-view'; // Importar el componente TabBar

const renderScene = ({ route }) => {
    switch (route.key) {
        case 'matches':
            return <Home />;
        case 'players':
            return <Home />;
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
                    indicatorStyle={{ backgroundColor: 'red' }}
                    style={{ backgroundColor: 'orange' }}
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


