
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import CategoriesScreen from './src/screens/CategoriesScreen';
import store from './src/store/redux/store'
const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#24180f',
  paddingTop:18
  }
 
});


