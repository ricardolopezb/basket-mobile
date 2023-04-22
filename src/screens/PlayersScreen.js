import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {Match} from "../components/match/Match";
import {Player} from "../components/player/Player";
import {toKebabCase} from "../components/common/utils";

export const PlayersScreen = () => {
    const [players,setPlayers] = useState([
        {name:"Steph Curry",
         team:"golden state warriors",},
        {name:"Manu Ginobili",
        team:"san antonio spurs"}
    ])

    return (
        <ScrollView style={styles.container}>
            {
                players.map((player,index) => {
                    return (
                        <Player
                            name={player.name}
                            team={toKebabCase(player.team)}
                            parity={index%2===0}
                        />
                    )
                })
            }
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow:"scroll"
    },
});