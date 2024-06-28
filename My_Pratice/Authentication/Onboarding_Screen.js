import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width: screenWidth} = Dimensions.get('window');

const onboardingData = [
  {
    title: 'Welcome to Our App',
    description: 'This is a wonderful app to get you started.',
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBkGbXWVWMnDqYIEv7MGyy-6pp8SxqWgJeQ&s',
    },
  },
  {
    title: 'Stay Organized',
    description: 'Manage your tasks and stay on top of things.',
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCiX9_el5zFfgi1rKWecz2TGNlpsGM47iww&s',
    },
  },
  {
    title: 'Achieve Your Goals',
    description: 'Track your progress and achieve more.',
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG-vcv33tLGPpchzDW6XHQdrXukJIfQt_Dw&s',
    },
  },
];

const Onboarding_Screen = () => {
  const navigation = useNavigation();

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    navigation.navigate('Home_Screen');
  };

  return (
    <ScrollView horizontal pagingEnabled style={styles.scrollContainer}>
      {onboardingData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          {index === onboardingData.length - 1 && (
            <TouchableOpacity
              style={styles.button}
              onPress={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding_Screen;
