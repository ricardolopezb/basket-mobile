import { ScrollView, StyleSheet} from 'react-native';
import {useState} from "react";
import {Player} from "../components/player/Player";
import {toKebabCase} from "../components/common/utils";
import ScrollAndRefetch from "../components/common/ScrollAndRefetch";

export const PlayersScreen = () => {
    const [players,setPlayers] = useState([
        {name:"Steph Curry",
         team:"golden state warriors",},
        {name:"Manu Ginobili",
        team:"san antonio spurs"}
    ])

    const playersList = players.map((player,index) =>{
        return (
            <Player
                name={player.name}
                team={toKebabCase(player.team)}
                parity={index%2===0}
            />
        )
    })

    return (
        <ScrollAndRefetch>
            {playersList}
        </ScrollAndRefetch>
    );
}

