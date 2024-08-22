import './gesture-handler';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from "./components/Drawer/CustomDrawerContent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} screenOptions={{
      drawerPosition: 'right',
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#ffffff'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e7a88a ',
    }}>

    </Drawer.Navigator >
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Categories" component={CategoriesScreen} />
      <BottomTab.Screen name="Favorites" component={FavoritesScreen} />
    </BottomTab.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name={'Drawer'}
            options={{headerShown: false}}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name={'MealsOverview'}
            component={MealsOverviewScreen}
            // options={({route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            // }}}
          />
          <Stack.Screen name={'MealDetail'} component={MealDetailScreen} />
          <Stack.Screen name={"Bottom Tab"} component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
