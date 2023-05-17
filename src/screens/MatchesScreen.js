import {useEffect, useState} from "react";
import {Match} from "../components/match/Match";
import {toKebabCase} from "../components/common/utils";
import ScrollAndRefetch from "../components/common/ScrollAndRefetch";
import axios from "axios";

export const MatchesScreen = () => {
    const [matches,setMatches] = useState([
        {
            localTeam: {
                name: "Atlanta Hawks"
            },
            localTeamScore: 90,
            visitorTeam: {
                name: "san antonio spurs",
            },
            visitorTeamScore: 90
        },
        {
            localTeam: {
                name: "los angeles lakers",

            },
            localTeamScore: 90,
            visitorTeam: {
                name: "detroit pistons",
            },
            visitorTeamScore: 60,
        }

        // {
        //     team1Name:"los angeles lakers",
        //     team1points:90,
        //     team2name:"detroit pistons",
        //     team2points:60,
        // }
    ])

    const fetch = () =>{
        axios.get('http://192.168.1.90:8080/match/all')
            .then(response => {
                console.log("FOUND MATCHES", response.data)
                setMatches(response.data.sort(() => Math.random() - 0.5))
            })
            .catch(error => {
                console.error('Error al hacer la petición:', error);
            });
    }

    useEffect(() => {
        fetch()
    }, []);

    const matchesList = matches.map((match,index) => {
        return (
            <Match
                team1Name={toKebabCase(match.localTeam.name)}
                team2Name={toKebabCase(match.visitorTeam.name)}
                team1Points={match.localTeamScore}
                team2Points={match.visitorTeamScore}
                parity={index % 2 === 0}>
            </Match>
        )
    })


    return (
        <ScrollAndRefetch fetch={fetch}>
            {matchesList}
        </ScrollAndRefetch>

    )
};

