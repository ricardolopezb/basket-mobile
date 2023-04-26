import React from 'react';
import {Card} from "../common/Card";
import styleSheet from "react-native-web/dist/exports/StyleSheet";
import {Image, Text, View} from "react-native";

export const Player = (props) => {

    const url = props.team != "phoenix-suns" ? "https://cdn.freebiesupply.com/images/large/2x/"+props.team+"-logo-transparent.png":
   "https://1000marcas.net/wp-content/uploads/2020/02/Logo-Phoenix-Suns.png"
   
   return (
        <Card parity={props.parity}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        resizeMode="contain"
                        style={{height:120,width:100}}
                        source={{uri:url}}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                    <Text style={styles.stats}>
                        - Faults:{props.faults}
                    </Text>
                    <Text style={styles.stats}>
                        - Matches:{props.matches}
                    </Text>
                    <Text style={styles.stats}>
                        - Score:{props.score}
                    </Text>
                </View>
            </View>
        </Card>
    );
};

const styles = styleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection: "row",
    },
    logo:{
        width: "40%",
        justifyContent:"center",
        alignItems: "center"
    },
    nameContainer:{
      marginLeft:15,
      width:"60%",
      alignItems:"left",
      justifyContent: "center",
    },
    name:{
        marginBottom:10,
        fontWeight:"bold",
        fontSize:25,
        color:"#071c34",
    },
    stats:{
        fontWeight:"bold",
        fontSize:18,
        color:"#071c34",
    }
})
