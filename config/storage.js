import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    alert(
        'Gagal menyimpan data di localstorage!'
    );
  }
};

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(
        'Gagal mengambil data dari localstorage!'
    );
  }
};

export const removeItem = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.removeItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(
        'Gagal menghapus data dari localstorage!'
    );
  }
};
