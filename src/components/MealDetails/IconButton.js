import { View, Text,Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const IconButton = ({onTap,color,icon}) => {
  return (
    <Pressable  onPress={onTap} style={({pressed})=>pressed&&styles.pressable}>
      <Icon name={icon} size={32} color={color} />
    </Pressable>
  );
}

export default IconButton;
const styles=StyleSheet.create({
    pressable:{
        opacity:0.7,
      
    }
})