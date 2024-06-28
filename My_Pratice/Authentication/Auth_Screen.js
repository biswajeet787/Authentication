import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Google_OTP from './Google_OTP';
import OTP_Screen from './OTP_Screen';
import Onboarding_Screen from './Onboarding_Screen';
import Home_Screen from './Home_Screen';
import Menu_Screen from './Menu_Screen';


import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function Auth_Screen() {

  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkOnboardingAndLoginStatus = async () => {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      if (onboardingCompleted === 'true' && userLoggedIn === 'true') {
        setInitialRoute('Home_Screen');
      } else {
        setInitialRoute('Google_OTP');
      }
    };
    checkOnboardingAndLoginStatus();
  }, []);

  if (initialRoute === null) {
    return null; // Show a loading spinner here if needed
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Google_OTP"
          component={Google_OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP_Screen"
          component={OTP_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding_Screen"
          component={Onboarding_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_Screen"
          component={Home_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu_Screen"
          component={Menu_Screen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth_Screen;
