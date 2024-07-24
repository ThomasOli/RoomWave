import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const properties = [
  {
    id: '1',
    name: '112 Green St.',
    rooms: 240,
    tenants: 700,
    scans: 688,
    totalScans: 693,
    image: require('../../assets/images/house1.jpg'),
  },
  {
    id: '2',
    name: 'University Center',
    rooms: 500,
    tenants: 1729,
    scans: 1000,
    totalScans: 1635,
    image: require('../../assets/images/universitycenter.jpg'),
  },
  {
    id: '3',
    name: 'UIUC Snyder Hall',
    rooms: 500,
    tenants: 1000,
    scans: 10,
    totalScans: 1000,
    image: require('../../assets/images/snyderhall.jpg'),
  },
  {
    id: '4',
    name: '215 West, Chicago',
    rooms: 232,
    tenants: 232,
    scans: 222,
    totalScans: 232,
    image: require('../../assets/images/house2.jpg'),
  },
];

function PropertyList() {
  return (
    <FlatList
      data={properties}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.propertyCard}>
          <Image source={item.image} style={styles.propertyImage} />
          <View style={styles.propertyInfo}>
            <Text style={styles.propertyName}>{item.name}</Text>
            <Text style={styles.propertyDetails}>{item.rooms} Rooms</Text>
            <Text style={styles.propertyDetails}>{item.tenants} Tenants</Text>
            <Text style={styles.propertyScans}>
              <Text style={{ color: item.scans === item.totalScans ? 'green' : item.scans / item.totalScans > 0.5 ? 'orange' : 'red' }}>
                {item.scans}/{item.totalScans}
              </Text>{' '}
              Scans
            </Text>
          </View>
        </View>
      )}
    />
  );
}

function CurrentProperties() {
  return <PropertyList />;
}

function ArchivedProperties() {
  return (
    <View style={styles.centeredView}>
      <Text>No archived properties</Text>
    </View>
  );
}

export default function PropertyOwnersScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Current" component={CurrentProperties} />
        <Tab.Screen name="Archived" component={ArchivedProperties} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  propertyCard: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  propertyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  propertyInfo: {
    marginLeft: 16,
    flex: 1,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  propertyDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  propertyScans: {
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
