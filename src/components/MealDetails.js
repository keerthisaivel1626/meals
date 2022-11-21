import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetails = ({duration, complexity, affordability, textStyle}) => {
  return (
    <View style={[styles.details, textStyle]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
