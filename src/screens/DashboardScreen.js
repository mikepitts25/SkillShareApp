import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.section}>
        <Text>Training Progress: Placeholder Progress Bar</Text>
      </View>
      <View style={styles.section}>
        <Text>Active Gigs: Placeholder List</Text>
      </View>
      <View style={styles.section}>
        <Text>Overall Progress: Placeholder Stats</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  section: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default DashboardScreen;