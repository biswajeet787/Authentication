import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const featuredImage = {
  uri: 'https://i0.wp.com/image.tmdb.org/t/p/original/qWlCLaDJI1O7swFzSbapPNVJyjl.jpg?ssl=1',
};

const cardData = [
  {
    title: "Profile",
    description: "View and edit your profile information.",
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci86_aIcX_CFem9zE9v1hmw11Ywjlp_QaGg&s' },
    screen: 'Menu_Screen',  // Added screen property
  },
  {
    title: "Tasks",
    description: "Manage your tasks and to-do lists.",
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSFaAp2dfglkBSkIY0zBeU-JoPh357YeVCg&s' },
  },
];

const Home_Screen = ({ navigation }) => {
  const handleLogout = async () => {
    // Clear the login status from AsyncStorage
    await AsyncStorage.removeItem('userLoggedIn');
    // await AsyncStorage.removeItem('onboardingCompleted');
    // Navigate to the Google_OTP screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Google_OTP' }],
    });
  };

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome to Our App!</Text>
        <Text style={styles.welcomeMessage}>We're glad to have you here. Explore the app to discover new features and stay organized.</Text>
      </View>
      <Image source={featuredImage} style={styles.featuredImage} />
      <View style={styles.cardContainer}>
        {cardData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => item.screen && navigateToScreen(item.screen)}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  featuredImage: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    marginVertical: 10,
    width: screenWidth * 0.9,
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Home_Screen;
