import React from 'react';
import {Text, View} from "react-native";

function UserList({name, position, disabled}) {
  return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#BAB8B8'}}>
        <Text style={{fontSize: 14,color: disabled ? '#D9D9D9' :'#000', fontFamily: 'Poppins-Semibold'}}>{name}</Text>
        <Text style={{fontSize: 14, color: disabled ? '#D9D9D9' :'#2A1E5A', fontFamily: 'Poppins-Semibold'}}>{disabled ? 'Outside TUKS' : position}</Text>
      </View>
  );
}

export default UserList;
