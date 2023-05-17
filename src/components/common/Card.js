import React from 'react';
import styleSheet from "react-native-web/dist/exports/StyleSheet";
import {View} from "react-native";

export const Card = (props) => {
    return (
        <View
            style={[styles.container,{backgroundColor:props.parity ? "#CCCCCC" : "#D3D0CB"}]} testID={"card"}>
            {props.children}
        </View>
    );
};

const styles = styleSheet.create({
    container:{
        width:"95%",
        justifyContent:"center",
        alignSelf:"center",
        height:150,
        marginTop:10,
        borderRadius:15,
        borderWidth:1,
        elevation: 5, // Valor de elevación de la vista
        shadowColor: '#333333', // Color de sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra en horizontal y vertical
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
        padding:20
    }
})



