import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, Image, StyleSheet} from 'react-native';
import {socket} from "../config/socket";
import {storeData} from "../config/storage";
import MagnifierIcon from "../components/magnifier-icon";
import UserList from "../components/user-list";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import CustomHeader from "../components/custom-header";
import getNumberOfFloor from "../config/getNumberOfFloor";

const DetailScreen = ({route, navigation}) => {
    const {position, users} = route.params
    const [rawUsers, setRawUsers] = useState(users)
    const [filteredUsers, setFilteredUsers] = useState([])
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../assets/font/Poppins-Bold.ttf'),
    });
    const [textSearch, setTexSearch] = useState('')

    console.log(`ini gambar ${position[1]}`)

    useEffect(() => {
        setFilteredUsers(filteredUsers.filter(() => filteredUsers.name.toLowerCase().includes(textSearch.toLowerCase())));
    }, [textSearch]);

    console.log(`ini dihalaman detail ${position[0]}`)

    useEffect(() => {
      setFilteredUsers(rawUsers.filter(item => item.currentPosition === position[0]))
    }, [rawUsers]);

    useEffect(() => {
      const onRefreshUserDataList = async (data) => {
        console.log('on refresh user data list (detail)', data)
        setRawUsers(data)
        await storeData('users-data', data)
      }

      socket.on('refresh-user-lists', onRefreshUserDataList)

      return () => {
        socket.off('refresh-user-lists', onRefreshUserDataList)
      }
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
      <View style={styles.container} onLayout={onLayoutRootView}>

        <View style={{
          paddingTop: 20,
        }}>
            <CustomHeader onPress={() => navigation.goBack()} numberOfFlor={getNumberOfFloor(position[0])}/>
        </View>

        <View style={{alignItems: "center",}}>
          <Image style={{height: 223, width:380, resizeMode: "contain"}} source={{uri: `${position[1]}`,}}/>
        </View>

          <View style={styles.searchBarContainer}>
              <MagnifierIcon/>
              <TextInput onChangeText={text => setTexSearch(text)} style={styles.searchBar} placeholder="cari temanmu" />
          </View>

        <View style={{marginTop: 20}}>
            {filteredUsers.map((user,index) => <UserList key={index} name={user.name} position={user.currentPosition} />)}
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
});

export default DetailScreen;
