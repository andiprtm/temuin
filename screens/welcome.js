import React, {useCallback, useEffect, useState} from "react";
import * as Location from "expo-location";
import {View, Text, StyleSheet, Image, Dimensions, Linking} from "react-native";
import Button from "../components/button";
import Logo from "../components/logo";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import WelcomeIlustration from "../components/welcome-ilustrasi";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import WavingHand from "../components/waving-hand";

const windowWidth = Dimensions.get("window").width;

const Welcome = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
    });
    const [status, requestPermission] = Location.useForegroundPermissions()
    const [locationGranted, setLocationGranted] = useState(false)

    const getLocationPermission = () => {
        requestPermission()
            .then(r => r)
            .catch(e => alert(e.toString()))
    }

    useEffect(() => {
        if (status?.granted) {
            setLocationGranted(true)
        } else if (!status?.granted && status?.canAskAgain) {
            getLocationPermission()
        }
    }, [status]);

    useEffect(() => {
        getLocationPermission()
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View onLayout={onLayoutRootView} style={{paddingTop: insets.top + 50, ...styles.container}}>
            <Logo/>
            <WelcomeIlustration/>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.selamatDatangParent}>
                        <Text style={styles.title}>Selamat Datang</Text>
                        <WavingHand style={styles.emojiWavingHandSign1}/>
                    </View>
                    <Text style={styles.description}>
                        Temuin, adalah aplikasi untuk mengetahui lokasi temanmu
                        di dalam gedung Telkom University Kampus Surabaya
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    {locationGranted &&<Button
                        text="Mulai Petualangan"
                        onPress={() => navigation.navigate("Login")}
                    />}
                    {!locationGranted && <Button
                        text="Beri Akses Lokasi"
                        onPress={() => {
                            requestPermission()
                                .then(r => {
                                    if (!r.canAskAgain) return Linking.openSettings()
                                })
                                .catch(e => alert(e.toString()))
                        }}
                    />}
                </View>
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    imageContainer: {
        paddingTop: 50,
        flex: 1,
        width: windowWidth - 60,
        maxHeight: 250,
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
    description: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Poppins-Medium"
    },
    buttonContainer: {
        paddingBottom: 16,
    },
    selamatDatangParent: {
        flexDirection: "row", // Align children horizontally
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        paddingBottom: 16,
    },
    emojiWavingHandSign1: {
        marginTop: -6
    },
});
