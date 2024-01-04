import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, Image, StyleSheet} from 'react-native';
import {socket} from "../config/socket";
import {storeData} from "../config/storage";
import Logo from "../components/logo";
import WelcomeText from "../components/welcome-text";
import Card from "../components/card";
import MagnifierIcon from "../components/magnifier-icon";
import UserList from "../components/user-list";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const DetailScreen = ({route}) => {
    const {position, users} = route.params
    const [rawUsers, setRawUsers] = useState(users)
    const [filteredUsers, setFilteredUsers] = useState([])
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/font/Poppins-Bold.ttf'),
    });

    // useEffect(() => {
    //   setFilteredUsers(rawUsers.filter(item => item.currentPosition === position))
    // }, [rawUsers]);
    //
    // useEffect(() => {
    //   const onRefreshUserDataList = async (data) => {
    //     console.log('on refresh user data list (detail)', data)
    //     setRawUsers(data)
    //     await storeData('users-data', data)
    //   }
    //
    //   socket.on('refresh-user-lists', onRefreshUserDataList)
    //
    //   return () => {
    //     socket.off('refresh-user-lists', onRefreshUserDataList)
    //   }
    // }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 50,
          marginBottom: 25,
        }}>
          <Logo/>
        </View>

        <View style={{alignItems: "center",}}>
          <Image style={{height: 380, width:380}} source={{uri: "https://is3.cloudhost.id/andiprtm/Frame%201078%20%281%29.png",}}/>
        </View>

        <View style={{marginTop: 20}}>
          <UserList name={"mmg"}/>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff"
    },
    lokasimuSekarangBerada1: {
        color: "#000",
        marginTop: 6
    },
    lantai2Sayap: {
        color: "#ffc300"
    },
    lokasimuSekarangBeradaContainer: {
        fontSize: 14,
        fontFamily: "Poppins-Semibold",
        textAlign: "left",
        width: 306,
        marginBottom: 9,
    },
    grayBox: {
        height: 80,
        width: '100%',
        backgroundColor: 'gray',
        marginBottom: 10,
        justifyContent: 'center',
    },
    grayBoxText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchBarContainer: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#2A1E5A',
        borderRadius: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBar: {
        marginLeft: 15
    },
    bottomText: {
        marginTop: 20,
    },
    scrollView: {
        flexDirection: 'row',
    },
    card: {
        height: 'auto',
        width: 350, // Ubah sesuai kebutuhan
        marginRight: 10, // Untuk memberikan jarak antar card (opsional)
    },
});

export default DetailScreen;
