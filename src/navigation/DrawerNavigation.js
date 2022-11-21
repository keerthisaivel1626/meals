import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        component={CategoriesScreen}
        name="CategoriesScreen"
        options={{
          title: 'All Categories',
          drawerIcon: ({tintColor,size,color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({tintColor,size,color}) => (
            <Icon name="star" size={size} color={color} />
          ),
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
