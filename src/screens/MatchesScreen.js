import {useState} from "react";
import {Match} from "../components/match/Match";
import {toKebabCase} from "../components/common/utils";
import ScrollAndRefetch from "../components/common/ScrollAndRefetch";

export const MatchesScreen = () => {
    const [matches,setMatches] = useState([
        {
            team1Name:"Atlanta Hawks",
            team1points:80,
            team2name:"san antonio spurs",
            team2points:82,
        },

        {
            team1Name:"los angeles lakers",
            team1points:90,
            team2name:"detroit pistons",
            team2points:60,
        }
    ])

    const fetch = () =>{
        axios.get('http://172.22.47.74:8080/api/matches/all')
            .then(response => {
                setPlayers(...matches,...response.data.sort(() => Math.random() - 0.5))
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
                team1Name={toKebabCase(match.team1Name)}
                team2Name={toKebabCase(match.team2name)}
                team1Points={match.team1points}
                team2Points={match.team2points}
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

