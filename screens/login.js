import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

const windowWidth = Dimensions.get("window").width;

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/icon.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Isi Namamu Yuk</Text>
                    <View style={styles.formInput}>
                        <Input />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        text="Mulai Petualangan"
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
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        fontSize: 16,
        color: "gray",
    },
    buttonContainer: {
        paddingBottom: 16,
    },
    formInput: {
        paddingTop: 20,
    },
});
