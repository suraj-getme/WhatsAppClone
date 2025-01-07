import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatScreen from './src/screens/ChatScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CallsScreen from './src/screens/CallScreen'
import StatusScreen from './src/screens/StatusScreen'
import { NavigationContainer } from '@react-navigation/native'
import TempScreen from './src/screens/TempScreen'
import ChatDetailScreen from './src/screens/ChatDetailScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats') {
          iconName = 'chat';
        } else if (route.name === 'Status') {
          iconName = 'donut-large';
        } else if (route.name === 'Calls') {
          iconName = 'call';
        } else if (route.name === 'Temp') {
          iconName = 'repeat';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#128C7E',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Chats" component={ChatScreen}/>
    <Tab.Screen name="Calls" component={CallsScreen}/>
    <Tab.Screen name="Status" component={StatusScreen}/>
    <Tab.Screen name="Temp" component={TempScreen}/>
  </Tab.Navigator>
)


const App = () => {
  return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
          />
          <Stack.Screen name="ChatDetail" component={ChatDetailScreen}
          options={({route})=> ({title: route.params.name})}
          />
        </Stack.Navigator>
       </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
















// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ChatScreen from './src/screens/ChatScreen'

// const App = () => {
//   return (
//     <>
//       <ChatScreen/>
  
//     </>
//   )
// }

// export default App

// const styles = StyleSheet.create({})