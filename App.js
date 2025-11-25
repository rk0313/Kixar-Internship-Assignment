import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingProvider } from './src/context/BookingContext';

// Screens
import TurfDetailsScreen from './src/screens/TurfDetailsScreen';
import BookingScreen from './src/screens/BookingScreen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ headerShown: false }}
          initialRouteName="TurfDetails"
        >
          <Stack.Screen name="TurfDetails" component={TurfDetailsScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookingProvider>
  );
}