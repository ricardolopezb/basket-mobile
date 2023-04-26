import {useEffect, useState} from "react";
import {Player} from "../components/player/Player";
import {toKebabCase} from "../components/common/utils";
import ScrollAndRefetch from "../components/common/ScrollAndRefetch";
import axios from 'axios';

export const PlayersScreen = () => {
    const [players,setPlayers] = useState([])

    const fetch = () =>{
        axios.get('http://172.22.47.74:8080/api/stats/all')
            .then(response => {
                setPlayers(response.data.sort(() => Math.random() - 0.5))
            })
            .catch(error => {
                console.error('Error al hacer la petición:', error);
            });
    }

    useEffect(() => {
        fetch()
    }, []);

    const playersList = players.map((player,index) =>{
        return (
            <Player
                team={toKebabCase(player.teamName)}
                name={player.name}
                parity={index%2 === 0}
                faults={player.faultsCommited}
                matches={player.matchesPlayed}
                score={player.totalScoring}
            />
        )
    })

    return (
        <ScrollAndRefetch fetch={fetch}>
            {playersList}
        </ScrollAndRefetch>
    );
}

