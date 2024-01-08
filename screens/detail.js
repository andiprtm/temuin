import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {socket} from "../config/socket";
import {storeData} from "../config/storage";
import MagnifierIcon from "../components/magnifier-icon";
import UserList from "../components/user-list";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import CustomHeader from "../components/custom-header";
import getNumberOfFloor from "../config/getNumberOfFloor";
import {useIsFocused} from "@react-navigation/native";

const DetailScreen = ({route, navigation}) => {
  const isFocus = useIsFocused();
  const {position, users} = route.params
  const [rawUsers, setRawUsers] = useState(users)
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchUsers, setSearchUsers] = useState([])
  const [fontsLoaded] = useFonts({
      'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
      'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('../assets/font/Poppins-Bold.ttf'),
  });
  const [textSearch, setTexSearch] = useState('')

  useEffect(() => {
    setSearchUsers(filteredUsers.filter(user => user.name.toLowerCase().includes(textSearch.toLowerCase())))
  }, [textSearch]);

  useEffect(() => {
    setFilteredUsers(rawUsers.filter(item => item.currentPosition === position[0]))
  }, [rawUsers]);

  useEffect(() => {
    const onRefreshUserDataList = async (data) => {
      console.log('on refresh user data list (detail)', data)
      setRawUsers(data)
      await storeData('users-data', data)
    }

    const onCurrentUsersList = (users) => {
      console.log('onCurrentUsersList (detail)', users)
      setRawUsers(users)
    }

    const onUserDisconnected = (users) => {
      console.log('onUserDisconnected (detail)', users)
      setRawUsers(users)
    }

    socket.on('refresh-user-lists', onRefreshUserDataList)
    socket.on('current-users-list', onCurrentUsersList)
    socket.on('user-disconnected', onUserDisconnected)

    return () => {
      socket.off('refresh-user-lists', onRefreshUserDataList)
      socket.off('current-users-list', onCurrentUsersList)
      socket.off('user-disconnected', onUserDisconnected)
    }
  }, []);

  useEffect(() => {
    if (isFocus) {
      socket.emit('get-current-data', {filter: null})
      console.log('focused detail')
    }
  }, [isFocus])

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
          {textSearch.length === 0 && filteredUsers.map((user,index) => <UserList key={index} name={user.name} position={user.currentPosition} />)}
          {textSearch.length !== 0 && searchUsers.map((user,index) => <UserList key={index} name={user.name} position={user.currentPosition} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
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
