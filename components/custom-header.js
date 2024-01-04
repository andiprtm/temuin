import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Back from "./back";
import BackIcon from "./back";
import Lantai from "./lantai";

function CustomHeader({onPress, numberOfFlor}) {
    return (
        <View style={styles.container}>
            <View style={styles.warpBack}>
                <TouchableOpacity onPress={onPress}>
                    <BackIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.warpText}>
                <View style={styles.warpTextChild}>
                    <Lantai/>
                    <View style={{marginTop: 2, marginLeft: 5}}>
                        <Text style={styles.text}>{numberOfFlor}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        flexDirection: "row",
        height: "auto",
        width: "auto",
    },
    warpText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginRight: 14,
        paddingTop:4
    },
    warpTextChild: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
    text: {
        fontFamily: "Poppins-Bold",
        fontSize: 16
    },
    warpBack: {
        flexDirection: "column",
        justifyContent: "center",
    }
})
export default CustomHeader;