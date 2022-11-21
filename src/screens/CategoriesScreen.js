import React from 'react'
import { View, Text, StyleSheet,FlatList, } from 'react-native'
import {CATEGORIES} from '../utils/data/DummyData';
import CategoriesGridTile from '../components/CategoriesGridTile';
const CategoriesScreen= ({navigation}) => {
 
    return (
      <FlatList
        data={CATEGORIES}
        renderItem={(item)=>{
        return (
          <>
            <CategoriesGridTile
              data={item.item.title}
              color={item.item.color}
              id={item.item.id}
            />
          </>
        );}}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    );
}

export default CategoriesScreen
const style=StyleSheet.create({})