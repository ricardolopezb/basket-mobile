import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl, ActivityIndicator} from "react-native";

const ScrollAndRefetch = (props) => {
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // Aquí puedes hacer la llamada inicial a tu API o fuente de datos para obtener la información
        fetchData();
    }, []);

    const fetchData =()=>{
        setRefreshing(true)
        console.log("caca")
        setTimeout(()=>setRefreshing(false),2000)
    }

    return (
        <ScrollView style={styles.container}>
            <RefreshControl
                refreshing={refreshing}
                onRefresh={fetchData} // Asociamos la función fetchData al evento onRefresh
            />
            {refreshing && <ActivityIndicator size="large" color="grey" style={styles.activityIndicator}/>}

            {props.children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow:"scroll"
    },
    activityIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

export default ScrollAndRefetch;
