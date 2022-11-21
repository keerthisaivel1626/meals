import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SubTitle = ({subtitle}) => {
    
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
}

export default SubTitle;
const styles = StyleSheet.create({
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});