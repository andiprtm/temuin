import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeText from "../components/welcome-text";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Logo from "../components/logo";
import Card from "../components/card";
import MagnifierIcon from "../components/magnifier-icon";
import UserList from "../components/user-list";

const Home = () => {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <View style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 50,
        marginBottom: 25,
      }}>
        <Logo/>
      </View>
      <WelcomeText style={{marginBottom: 9,}} text={"Hi, Andi"}/>
      <Text style={styles.lokasimuSekarangBeradaContainer}>
        <Text style={styles.lokasimuSekarangBerada1}>{`Lokasimu sekarang berada di `}</Text>
        <Text style={styles.lantai2Sayap}>Lantai 2 sayap kiri</Text>
      </Text>
      <View style={{height:'auto'}}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.card}>
            <Card text={"Lantai 2 sayap kiri"}/>
          </View>
          <View style={styles.card}>
            <Card text={"Lantai 2 sayap kiri"}/>
          </View>
          <View style={styles.card}>
            <Card text={"Lantai 2 sayap kiri"}/>
          </View>
          <View style={styles.card}>
            <Card text={"Lantai 2 sayap kiri"}/>
          </View>
        </ScrollView>
      </View>

      <View style={styles.searchBarContainer}>
        <MagnifierIcon/>
        <TextInput style={styles.searchBar} placeholder="cari temanmu" />
      </View>

      <View style={{marginTop: 20}}>
        <UserList name="Irvan" position="Lt 2 Sayap Kiri" />
        <UserList name="Kahil" disabled />
        <UserList name="Rayhan Furqoni" position="Lt 1 Sayap Kanan" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
