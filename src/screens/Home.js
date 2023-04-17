import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {Match} from "../components/match/Match";

export const Home = () => {
    const [matches,setMatches] = useState([
        {name:"caca"},{name:"kjasldjalks"},{name:"caca"},{name:"kjasldjalks"},{name:"caca"},{name:"kjasldjalks"},{name:"caca"},{name:"kjasldjalks"},{name:"caca"},{name:"kjasldjalks"}
    ])

    return (
        <ScrollView style={styles.container}>
            {
                matches.map((match) => {
                    return (
                        <Match name={match.name}></Match>
                    )
                })
            }
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow:"scroll"
    },
});
