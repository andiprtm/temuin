import React, {useCallback} from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import Logo from "../components/logo";
import LoginIlustration from "../components/login-ilustrasi";
import SmilingFace from "../components/smilling-face";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import WavingHand from "../components/waving-hand";

const windowWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
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
        <View style={{paddingTop: 50, ...styles.container}}>
            <Logo/>
            <LoginIlustration/>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.loginParent}>
                        <Text style={styles.title}>Isi Namamu Yuk</Text>
                        <SmilingFace style={styles.smilingFace}/>
                    </View>
                    <View style={styles.formInput}>
                        <Input />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        text="Lihat Lokasi"
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    imageContainer: {
        paddingTop: 50,
        flex: 1,
        width: windowWidth - 60,
        maxHeight: 250,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
    },
    contentContainer: {
        justifyContent: "space-between",
        flex: 1,
        width: windowWidth - 30,
        paddingHorizontal: 16,
        paddingTop: "10%",
        paddingBottom: "20%",
    },
    textContainer: {
        paddingBottom: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: "Poppins-Semibold",
        textAlign: "center",
        marginEnd: 6
    },
    buttonContainer: {
        paddingBottom: 16,
    },
    formInput: {
        paddingTop: 2,
    },
    loginParent: {
        flexDirection: "row", // Align children horizontally
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        paddingBottom: 16,
    },
    smilingFace: {
        marginTop: -6
    },
});
