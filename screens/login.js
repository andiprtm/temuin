import React, {useCallback, useEffect, useState} from "react";
import {View, Text, Dimensions, StyleSheet, ScrollView} from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import Logo from "../components/logo";
import LoginIlustration from "../components/login-ilustrasi";
import SmilingFace from "../components/smilling-face";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {socket} from "../config/socket";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {getClosestAccessPoint, refreshPosition} from "../config/get-mac";
import {storeData} from "../config/storage";
import Loading from "../components/loading";

const windowWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
    });
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const onLoginStatus = async (response) => {
            if (response.status) {
                const {users, userData, position} =  response.data
                await storeData('users-data', users)
                setIsLoading(false)
                return navigation.reset({
                    index: 0,
                    routes: [{name: 'Home', params: {users, userData, position}}],
                });
            }
            if (!response.status) {
                setIsLoading(false)
                return alert(response.message)
            }
        }

        socket.on('login-status', onLoginStatus)

        return () => {
            socket.off('login-status', onLoginStatus)
        }
    }, []);

    const onSubmit = () => {
        if (!name) return alert('Nama kosong!')
        setIsLoading(true)
        getClosestAccessPoint()
            .then(r => socket.emit('login', {
                name,
                ssid: r.SSID,
                mac: r.BSSID.toUpperCase()
            }))
            .catch(e => {
                setIsLoading(false)
                alert(e.toString())
            })
        refreshPosition(name)
    }

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <>
            <ScrollView onLayout={onLayoutRootView}>
                <View style={{paddingTop: insets.top + 50, ...styles.container}}>
                    <Logo/>
                    <LoginIlustration/>
                    <View style={styles.contentContainer}>
                        <View style={styles.loginParent}>
                            <Text style={styles.title}>Isi Namamu Yuk</Text>
                            <SmilingFace style={styles.smilingFace}/>
                        </View>
                        <View style={styles.formInput}>
                            <Input value={name} onChangeText={(val) => setName(val)} />
                        </View>
                        <Button
                          text="Lihat Lokasi"
                          onPress={onSubmit}
                        />
                    </View>
                </View>
            </ScrollView>
            {isLoading && <Loading />}
        </>
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
        width: '100%',
        paddingHorizontal: 46,
        paddingTop: 40,
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
    formInput: {
        paddingTop: 2,
        paddingBottom: 50
    },
    loginParent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 16,
    },
    smilingFace: {
        marginTop: -6
    },
});
