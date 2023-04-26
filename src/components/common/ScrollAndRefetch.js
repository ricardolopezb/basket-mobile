import React, {useState} from 'react';
import {ScrollView, StyleSheet, RefreshControl, ActivityIndicator, View} from "react-native";

const ScrollAndRefetch = (props) => {
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        setRefreshing(true)
         props.fetch()
        setTimeout(()=>setRefreshing(false),700)
    }

    return (
        <View style={styles.container}>
            {refreshing && (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color="#0E294B" />
                </View>
            )}
            <ScrollView style={styles.scroll}>
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={fetchData}
                />
                {props.children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
    activityIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'first',
        zIndex: 1,
    },
});

export default ScrollAndRefetch;
