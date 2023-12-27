import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FaceSavouring from "./face-savouring";
import Next from "./next";
import {useNavigation} from "@react-navigation/native";

const Card = ({text, users}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {position: text, users})} style={[styles.emojiFaceSavouringDeliciouParent, styles.wrapperVector4FlexBox]}>
            <FaceSavouring style={styles.emojiFaceSavouringDeliciou1} />
            <Text style={styles.yukTemukanTemanmu1}>Yuk, temukan temanmu yang berada di {text}</Text>
            <View style={[styles.wrapperVector4, styles.wrapperVector4FlexBox]}>
                <Next style={styles.wrapperVector4Child}/>
            </View>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    wrapperVector4FlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    emojiFaceSavouringDeliciou1: {
        width: 36,
        height: 36,
        marginRight: 8,
    },
    yukTemukanTemanmu1: {
        fontSize: 14,
        fontWeight: "600",
        fontFamily: "Poppins-Semibold",
        color: "#fff",
        textAlign: "left",
        width: 216,
        marginLeft: 15,
        marginBottom: -2,
    },
    wrapperVector4Child: {
        height: "100%",
        objectFit: "contain",
        position: "absolute",
        left: 1,
        top: 0,
        transform: [
            {
                scale: 1.63
            }
        ],
        width: "100%"
    },
    wrapperVector4: {
        width: 8,
        height: 14,
        display: "flex",
        marginLeft: 15,
        marginRight: 8
    },
    emojiFaceSavouringDeliciouParent: {
        alignSelf: "stretch",
        borderRadius: 16,
        backgroundColor: "#2a1e5a",
        borderStyle: "solid",
        borderColor: "#edd4f4",
        borderWidth: 2,
        overflow: "hidden",
        flexDirection: "row",
        paddingVertical: 16,
        width: "100%",
        marginBottom: 37,
    }
});

export default Card;
