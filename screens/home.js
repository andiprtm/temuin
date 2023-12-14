import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeText from "../components/welcome-text";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Logo from "../components/logo";
import Card from "../components/card";

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

      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Cari Temanmu..." />
      </View>

      <Text style={styles.bottomText}>Nama | Lokasi</Text>
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
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: '100%',
  },
  bottomText: {
    marginTop: 20,
  },
  scrollView: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: "yellow",
  },
  card: {
    height: "auto",
    width: 350, // Ubah sesuai kebutuhan
    marginRight: 10, // Untuk memberikan jarak antar card (opsional)
  },
});

export default Home;
