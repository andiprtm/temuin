import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Hi, Andi</Text>
      <Text style={styles.smallText}>
        Lokasimu sekarang berada di lantai 2 sayap kiri
      </Text>

      <TouchableOpacity
        style={styles.grayBox}
        onPress={() => navigation.navigate("Detail")}>
        <Text style={styles.grayBoxText}>
          Yuk, temukan temanmu yang berada di Lantai 2 sayap kiri
        </Text>
      </TouchableOpacity>

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
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
});

export default Home;
