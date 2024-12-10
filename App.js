import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import ProductForm from './screen/ProductForm';
import ProductList from './screen/ProductList';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode = "model">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductForm" component={ProductForm} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
