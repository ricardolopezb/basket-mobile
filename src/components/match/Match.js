import React from 'react';
import {Image, Text, View} from "react-native";
import styleSheet from "react-native-web/dist/exports/StyleSheet";
import {Card} from "../common/card";

export const Match = (props) => {
    return (
       <Card parity={props.parity}>
           <View style={styles.container}>
               <View style={styles.teamInfo}>
                   <Image
                       resizeMode="contain"
                       style={{height:100,width:80}}
                       source={{uri:"https://cdn.freebiesupply.com/images/large/2x/"+props.team1Name+"-logo-transparent.png"}}
                   />
                   <Text style={styles.points}>{props.team1Points}</Text>
               </View>

               <View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                   <Text style={styles.points}>-</Text>
               </View>

               <View style={styles.teamInfo}>
                   <Text style={styles.points}>{props.team2Points}</Text>
                   <Image
                       resizeMode="contain"
                       style={{height:100,width:80}}
                       source={{uri:"https://cdn.freebiesupply.com/images/large/2x/"+props.team2Name+"-logo-transparent.png"}}
                   />
               </View>
           </View>

       </Card>

    );
};

const styles = styleSheet.create({
    teamInfo:{
        width:"40%",
        display:"flex",
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"space-between"
    },
    points:{
        fontWeight:"bold",
        fontSize:30,
        color:"#071c34"
    },
    container:{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection: "row"
    }
})

