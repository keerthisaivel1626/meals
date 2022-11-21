import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CategoriesGridTile = ({...props}) => {
  const navigation=useNavigation();
  return (
    <View style={{...styles.gridItem, backgroundColor: props.color}}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.buttonContainer,
          pressed ? styles.pressableButtonContainer : null,
        ]}
        onPress={() => navigation.navigate('MealsOverViewScreen',{
          categoryData:props.data,
          categoryId:props.id
        })}>
        <View style={styles.innerGridItem}>
          <Text style={styles.title}>{props.data}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 6,
   
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 1,
  },
    pressableButtonContainer:{
    opacity:0.5
  },
  innerGridItem: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

});
