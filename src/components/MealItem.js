import React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';
const MealItem = ({id, title, image, duration, complexity, affordability}) => {
  const navigation = useNavigation();
  const SelectMealsHandler = () => {
    navigation.navigate('MealDetailsScreen', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc', borderless: false}}
        style={({pressed}) => [pressed ? styles.buttonPressed : null]}
        onPress={SelectMealsHandler}>
        <View style={styles.innerCOntainer}>
          <View>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerCOntainer: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
