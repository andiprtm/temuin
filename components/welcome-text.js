import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Alis from "./alis";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

const WelcomeText = (props) => {

    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/font/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.vectorParent}>
            <Alis style={styles.groupChild}/>
            <Text style={styles.hiAndi}>{props.text}</Text>
        </View>);
};

const styles = StyleSheet.create({
    groupChild: {
        top: 19,
        left: 8,
        width: 74,
        height: 10,
        position: "absolute"
    },
    hiAndi: {
        top: 0,
        left: 0,
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#000",
        textAlign: "left",
        position: "absolute",
    },
    vectorParent: {
        width: "100%",
        height: 30
    }
});

export default WelcomeText;
