import {useState} from "react";
import {Match} from "../components/match/Match";
import {toKebabCase} from "../components/common/utils";
import ScrollAndRefetch from "../components/common/ScrollAndRefetch";

export const MatchesScreen = () => {
    const [matches,setMatches] = useState([
        {
            team1Name:"miami heat",
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

    const matchesList = matches.map((match,index) => {
        return (
            <Match team1Name={toKebabCase(match.team1Name)}
                   team2Name={toKebabCase(match.team2name)}
                   team1Points={match.team1points}
                   team2Points={match.team2points}
                   parity={index % 2 === 0}></Match>
        )
    })


    return (
        <ScrollAndRefetch >
            {matchesList}
        </ScrollAndRefetch>

    )
};

