import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/home.png')} // Replace with the actual image name
        style={styles.image}
      />
      <Text style={styles.title}>RoomWave</Text>
      <Text style={styles.subtitle}>Your property management room</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PropertyOwnersScreen')}
      >
        <Text style={styles.buttonText}>Property Owners</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RentersScreen')}
      >
        <Text style={styles.buttonText}>Renters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 200, // Adjust based on your image size
    height: 200, // Adjust based on your image size
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  button: {
    width: '80%',
    padding: 16,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: "bold",
  },
});
