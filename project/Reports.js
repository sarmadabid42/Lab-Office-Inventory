import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";


const Report = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [reports, setReports] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  const generateReport = () => {
    // Check if both category and status are selected
    if (category && status) {
      // Call the API with the selected category and status
      const apiUrl = `http://192.168.56.1/Inventory_project_api/api/Lois/GenerateReport?cat=${category}&status=${status}`;

      // Fetch the data from the API and update the report list state
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Update the report list state with the retrieved data
          setReports(data);
          setErrorMessage("");
        })
        .catch((error) => {
          // Handle errors if any
          console.error(error);
          setErrorMessage("An error occurred while generating the report.");
        });
    } else {
      // Display an error message if either category or status is not selected
      setErrorMessage("Please select both category and status.");
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text>Select Category:</Text>
        <Picker
          selectedValue={category}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          <Picker.Item label="Computer" value="Computer" />
          <Picker.Item label="Furniture" value="Furniture" />
          <Picker.Item label="Projector" value="Projector" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Select Status:</Text>
        <Picker
          selectedValue={status}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        >
          <Picker.Item label="In Use" value="In Use" />
          <Picker.Item label="In Store" value="In Store" />
          <Picker.Item label="Out For Repairing" value="Out For Repairing" />
          <Picker.Item label="Expired" value="Expired" />
        </Picker>
      </View>

      <TouchableOpacity onPress={generateReport}>
        <Text style={styles.generateButton}>Generate Reports</Text>
      </TouchableOpacity>
      {errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      {/* Display the list of reports below the button */}
      {reports.length > 0 && (
        <View style={styles.reportContainer}>
          <Text style={styles.reportTitle}>Reports:</Text>
          {reports.map((report, index) => (
            <View key={index} style={styles.reportItem}>
              <Text>Inventory Name: {report.InventoryName}</Text>
              <Text>Description: {report.Descriptions}</Text>
              <Text>Venue: {report.Venue}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  dropdownContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  dropdown: {
    height: 50,
    width: 200,
    borderRadius: 5,
    borderColor: "black",
  },
  generateButton: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    backgroundColor: "#339FFF",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    margin: 20,
    borderColor: "#339FFF",
  },
  reportContainer: {
    marginTop: 20,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reportItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});

export default Report;    

