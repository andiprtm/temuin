import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import {socket} from "../config/socket";

const DetailScreen = () => {
  useEffect(() => {
    const onRefreshUserDataList = (data) => {
      console.log('on refresh user data list', data)
    }

    socket.on('refresh-user-lists', onRefreshUserDataList)

    return () => {
      socket.off('refresh-user-lists', onRefreshUserDataList)
    }
  }, []);
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default DetailScreen;
