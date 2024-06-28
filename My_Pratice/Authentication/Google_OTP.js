import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
    GoogleSignin,
    statusCodes,
    isErrorWithCode
  } from "@react-native-google-signin/google-signin";
import AsyncStorage from '@react-native-async-storage/async-storage';

  GoogleSignin.configure({
    webClientId: "768440750145-3q4d367tc0tjolgrs2oagv7sbaeglq6a.apps.googleusercontent.com", 
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
    offlineAccess: true, 
    hostedDomain: "", 
    forceCodeForRefreshToken: true, 
    accountName: "", 
    iosClientId: "<FROM DEVELOPER CONSOLE>", 
    googleServicePlistPath: "", 
    openIdRealm: "", 
    profileImageSize: 120, 
  });

const Google_OTP = ({ navigation }) => {

    const [user, setUser] = useState({});


 // Sign out from Google
 useEffect(() => {
  const signOutFromGoogle = async () => {
    await GoogleSignin.signOut();
  };
  signOutFromGoogle();
}, []);

// Google Sign-In
const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setUser(userInfo.user);
    await AsyncStorage.setItem('userLoggedIn', 'true');

    const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
    if (onboardingCompleted === 'true') {
      navigation.navigate('Home_Screen');
    } else {
      navigation.navigate('Onboarding_Screen');
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('User cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Operation in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play services not available or outdated');
    } else {
      console.log('Some other error happened');
    }
  }
};

  const [mobileNumber, setMobileNumber] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [confirm, setConfirm] = useState(null);

  const handleContinuePress = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(mobileNumber, true);
      await AsyncStorage.setItem('userLoggedIn', 'true');
      navigation.navigate('OTP_Screen', { mobileNumber: mobileNumber, verificationId: confirmation.verificationId });
    } catch (error) {
      alert(error.message);
    }
  };



  const handlePhoneNumberChange = (text) => {
    setMobileNumber(text);
    setIsButtonEnabled(text.length >= 13);
  };

  const handleContinue = () => {
    // Navigate to the OTP screen
    navigation.navigate('OTP_Screen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Sign In</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            maxLength={13}
            value={mobileNumber}
            onChangeText={handlePhoneNumberChange}
          />
        </View>
        <Text style={styles.orText}>OR</Text>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.continueButton, { backgroundColor: isButtonEnabled ? '#6200ee' : '#aaa' }]}
            disabled={!isButtonEnabled}
            onPress={handleContinuePress}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inner: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  orText: {
    marginVertical: 15,
    fontSize: 18,
    color: '#888',
  },
  googleButton: {
    width: 192,
    height: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Google_OTP;
