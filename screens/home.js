import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import WelcomeText from "../components/welcome-text";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Logo from "../components/logo";
import Card from "../components/card";
import MagnifierIcon from "../components/magnifier-icon";
import UserList from "../components/user-list";
import {socket} from "../config/socket";
import {storeData} from "../config/storage";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Home = ({route}) => {
  const isFocus = useIsFocused()
  const insets = useSafeAreaInsets()
  const {users, userData, position} = route.params
  const {name, currentPosition} = userData
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('../assets/font/Poppins-Medium.ttf'),
    'Poppins-Semibold': require('../assets/font/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/font/Poppins-Bold.ttf'),
  });
  const [location, setLocation] = useState(currentPosition)
  const [usersPosition, setUsersPosition] = useState(users)
  const [textSearch, setTexSearch] = useState('')

  useEffect(() => {
    setUsersPosition(users.filter(user => user.name.toLowerCase().includes(textSearch.toLowerCase())));
  }, [textSearch]);

  useEffect(() => {
    const onRefreshUserDataList = async (data) => {
      console.log('on refresh user data list (home)', data)
      const matchedUser = data.filter(item => item.id === userData.id)
      if (matchedUser) {
        setLocation(matchedUser[0].currentPosition)
      }
      setUsersPosition(data)
      await storeData('users-data',data)
    }

    const onCurrentUsersList = (users) => {
      console.log('onCurrentUsersList (home)', users)
      setUsersPosition(users)
    }

    const onUserDisconnected = (users) => {
      console.log('onUserDisconnected (home)', users)
      setUsersPosition(users)
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
      console.log('focused home')
    }
  }, [isFocus]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{...styles.container, paddingTop: insets.top}} onLayout={onLayoutRootView}>
      <View style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        marginBottom: 25,
      }}>
        <Logo/>
      </View>
      <WelcomeText style={{marginBottom: 9,}} text={`Hi, ${name}`}/>
      <Text style={styles.lokasimuSekarangBeradaContainer}>
        <Text style={styles.lokasimuSekarangBerada1}>{`Lokasimu sekarang berada di `}</Text>
        <Text style={styles.lantai2Sayap}>{location}</Text>
      </Text>
      <View style={{height:'auto'}}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {position.map((item, index) => <View key={index} style={styles.card}>
            <Card text={[item.position, item.image]} users={users} />
          </View>)}
        </ScrollView>
      </View>

      <View style={styles.searchBarContainer}>
        <MagnifierIcon/>
        <TextInput onChangeText={text => setTexSearch(text)} style={styles.searchBar} placeholder="cari temanmu" />
      </View>

      <ScrollView style={{marginTop: 20}}>
        {usersPosition.map((user,index) => <UserList key={index} name={user.name} position={user.currentPosition} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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

export default Home;
