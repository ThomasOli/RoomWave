// DetailsScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;

export default function DetailsScreen() {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
