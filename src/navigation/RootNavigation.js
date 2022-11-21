import React from 'react';
import {View, Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsOverViewScreen from '../screens/MealsOverViewScreen';
import DrawerNavigation from './DrawerNavigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesContextProvider from '../store/context/FavoritesContext';
const Stack = createStackNavigator();
const RootNavigation = props => {
  return (
    // <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            cardStyle: {
              backgroundColor: '#3f2f25',
            },
          }}>
          <Stack.Screen
            component={DrawerNavigation}
            name="DrawerNavigation"
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            component={CategoriesScreen}
            name="CategoriesScreen"
            options={{
              title: 'All Categories',
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}
          /> */}
          <Stack.Screen
            component={MealsOverViewScreen}
            name="MealsOverViewScreen"
            // options={({route,navigation})=>{
            //   const cid = route.params.categoryId;
            //   return {title:cid}

            // }}
          />
          <Stack.Screen
            component={MealDetailsScreen}
            name="MealDetailsScreen"
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap me!' onPress={()=>console.log('pressed')}/>;
            //   },
            // }}
            options={{title: 'About the Meal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </FavoritesContextProvider>
  );
};

export default RootNavigation;
