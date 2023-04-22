import React from 'react';
import { StyleSheet,useWindowDimensions, View } from 'react-native';
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
        <>
            <View style={styles.header}></View>
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
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        height:"95%",
    },
    header:{
        height:"5%",
        backgroundColor:'#0E294B'
    }
})


