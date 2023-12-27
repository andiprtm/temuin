import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import {socket} from "../config/socket";
import {storeData} from "../config/storage";

const DetailScreen = ({route}) => {
  const {position, users} = route.params
  const [rawUsers, setRawUsers] = useState(users)
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    setFilteredUsers(rawUsers.filter(item => item.currentPosition === position))
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
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default DetailScreen;
