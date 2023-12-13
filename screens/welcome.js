import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Button from "../components/button";
import Logo from "../components/logo";
import {useSafeAreaInsets} from "react-native-safe-area-context"; // Gantilah dengan path yang benar

const windowWidth = Dimensions.get("window").width;

const Welcome = ({ navigation }) => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top, ...styles.container}}>
            <Logo>
            </Logo>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Selamat Datang</Text>
                    <Text style={styles.description}>
                        Temuin, adalah aplikasi untuk mengetahui lokasi temanmu
                        di dalam gedung Telkom University Kampus Surabaya
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        text="Mulai Petualangan"
                        onPress={() => navigation.navigate("Login")}
                    />
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
        backgroundColor: "#ffffff"
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
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        fontSize: 16,
    },
    buttonContainer: {
        paddingBottom: 16,
    },
});
