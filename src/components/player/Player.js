import React from 'react';
import {Card} from "../common/card";
import styleSheet from "react-native-web/dist/exports/StyleSheet";
import {Image, Text, TouchableOpacity, View} from "react-native";

export const Player = (props) => {
    return (
        <Card parity={props.parity}>
            <TouchableOpacity style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        resizeMode="contain"
                        style={{height:120,width:100}}
                        source={{uri:"https://cdn.freebiesupply.com/images/large/2x/"+props.team+"-logo-transparent.png"}}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                </View>
            </TouchableOpacity>
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
      width:"60%",
      alignItems:"left",
        justifyContent: "center"
    },
    name:{
        fontWeight:"bold",
        fontSize:25,
        color:"#071c34"
    }
})
