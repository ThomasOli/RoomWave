import React from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Searchbar,
  IconButton
} from "react-native-paper";

const RentersScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('Scans');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Jay!</Text>
        </View>

        <View style={styles.searchSection}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchInput}
          />
          <IconButton
            icon="tune"
            size={24}
            onPress={() => console.log('Pressed')}
            style={styles.filterButton}
          />
        </View>

        <View style={styles.tabs}>
          <Button
            mode="contained"
            style={activeTab === 'Information' ? styles.tabButtonActive : styles.tabButton}
            onPress={() => handleTabPress('Information')}
          >
            Info
          </Button>
          <Button
            mode="contained"
            style={activeTab === 'Scans' ? styles.tabButtonActive : styles.tabButton}
            onPress={() => handleTabPress('Scans')}
          >
            Scans
          </Button>
          <Button
            mode="contained"
            style={activeTab === 'AI Analysis' ? styles.tabButtonActive : styles.tabButton}
            onPress={() => handleTabPress('AI Analysis')}
          >
            Analysis
          </Button>
        </View>

        {activeTab === 'Scans' && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Bedroom</Text>
              <Card style={[styles.card, styles.bedroomCard]}>
                <Card.Cover source={{ uri: "https://img.interiorcompany.com/interior/webproduct/366638506900968397738.png"}} style={styles.cardCover}/>
                <View style={styles.cardTextContainer}>
                  <Title style={styles.cardTitleOverlay}>Room 1: Jay</Title>
                  <Paragraph style={styles.cardParagraphOverlay}>Scan Complete: 7/25/2024</Paragraph>
                </View>
              </Card>
            </View>

            <View style={styles.section}>
              <View style={styles.additionalAreaHeader}>
                <Text style={styles.sectionTitle}>Additional Area</Text>
                <Button mode="contained" style={styles.addButton}>
                  Add Area
                </Button>
              </View>
              <View style={styles.additionalArea}>
              <Card style={styles.areaItem}>
                <View style={styles.areaItemContent}>
                  <Card.Cover source={{ uri: "https://images.signaturehardware.com/i/signaturehdwr/summer23-powder-room-hero" }} style={styles.areaItemCover}/>
                  <View style={styles.areaItemText}>
                    <Title style={styles.textBlack}>Bathroom</Title>
                    <Paragraph style={styles.textBlack}>Move-Out Scan Pending</Paragraph>
                    <Button mode="text" compact>
                      <Text style={styles.textBlack}>View Scans</Text>
                    </Button>
                  </View>
                </View>
              </Card>
              <Card style={styles.areaItem}>
                <View style={styles.areaItemContent}>
                  <Card.Cover source={{ uri: "https://images.thdstatic.com/lifestyleimages/1024x682/b3c414af-4a89-4ba9-9ba9-3e91a8b697d40.jpeg" }} style={styles.areaItemCover}/>
                  <View style={styles.areaItemText}>
                    <Title style={styles.textBlack}>Shared Spaces</Title>
                    <Paragraph style={styles.textBlack}>Completed by: John Doe</Paragraph>
                    <Button mode="text" compact>
                      <Text style={styles.textBlack}>View Scans</Text>
                    </Button>
                  </View>
                </View>
              </Card>
              <Card style={styles.areaItem}>
                <View style={styles.areaItemContent}>
                  <Card.Cover source={{ uri: "https://www.bhg.com/thmb/ZkJd7GwTx9Nzv59jojOO2nb_uTo=/3002x0/filters:no_upscale():strip_icc()/Modern-gray-bathroom-Sch31478_Mid7007959_Bath_Overall_Alt_A_044_F99WsfKYKESB5ePvsgZbnt-c657786eec9e4c1bad575c6c558d6486.jpg" }} style={styles.areaItemCover}/>
                  <View style={styles.areaItemText}>
                    <Title style={styles.textBlack}>Other</Title>
                    <Button mode="text" compact>
                      <Text style={styles.textBlack}>View Scans</Text>
                    </Button>
                  </View>
                  </View>
                </Card>
              </View>
            </View>
          </>
        )}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
  },
  filterButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
  },
  tabButtonActive: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#007bff',
  },
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  additionalAreaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  card: {
    marginBottom: 20,
    borderRadius: 0, // Make corners square
  },
  bedroomCard: {
    marginLeft: 40, 
    marginRight: 40, 
    marginTop: 20, 
    borderRadius: 30
  },
  cardTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  cardCover: {
    borderRadius: 30, // Make corners square for card cover
  },
  cardContent: {
    padding: 16,
    paddingBottom: 24,
  },
  cardTitleOverlay: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardParagraphOverlay: {
    color: '#fff',
    fontSize: 14,
  },
  cardTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardParagraph: {
    color: '#000',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#073590',
    borderRadius: 15
  },
  additionalArea: {},
  areaItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 20, // Make corners square
    height: 100, // Make the cards smaller vertically
  },
  areaItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  areaItemCover: {
    width: 100, // Fixed width for the image
    height: '100%', // Full height for the image
    borderRadius: 20
  },
  areaItemText: {
    flex: 1,
    padding: 10,
  },textBlack: {
    color: '#000',
  },
});

export default RentersScreen;
