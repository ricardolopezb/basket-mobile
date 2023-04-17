import React from 'react';
import {Text, View} from "react-native";
import styleSheet from "react-native-web/dist/exports/StyleSheet";

export const Match = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                {props.name}
            </Text>
        </View>
    );
};

const styles = styleSheet.create({
    container:{
        width:"90%",
        justifyContent:"center",
        backgroundColor:"orange",
        alignSelf:"center",
        height:100,
        marginTop:20,
        borderRadius:15,
        borderWidth:1
    }
})