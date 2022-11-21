import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import MealItem from '../MealItem';
const MealsList = ({displayitem}) => {
  const renderMealItem = itemData => {
    return (
      <View style={{flex: 1}}>
        <MealItem
          id={itemData.item.id}
          title={itemData.item.title}
          complexity={itemData.item.complexity}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          affordability={itemData.item.affordability}
        />
      </View>
    );
  };

  return (
    <View style={styles.constainer}>
      <FlatList
        data={displayitem}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MealsList;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});