import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

function UpdateVanue({ route }) {
  const { item } = route.params;

  // Access the properties of the item object
  const { InventoryID, InventoryName, Venue, IssueTo, Category, quantity } = item;

  const data = [
    { label: 'Inventory Name', value: InventoryName },
    { label: 'Venue', value: Venue },
    { label: 'IssueTo', value: IssueTo },
    { label: 'Category', value: Category },
    { label: 'Quantity', value: quantity },
  ];

  // State for the Venue value
  const [venueValue, setVenueValue] = useState(Venue);

  const renderItem = ({ item }) => {
    if (item.label === 'Venue') {
      return (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.label}</ListItem.Title>
            <TextInput
              style={styles.valueInput}
              value={venueValue}
              onChangeText={setVenueValue}
            />
          </ListItem.Content>
        </ListItem>
      );
    }

    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.label}</ListItem.Title>
          <ListItem.Subtitle>{item.value}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const handleUpdate = () => {
    // Prepare the updated data
    const updatedData = {
      InventoryID: InventoryID,
      InventoryName: InventoryName,
      Venue: venueValue,
      IssueTo: IssueTo,
      Category: Category,
      quantity: quantity,
    };

    // Make the API call to update the data
    fetch('http://192.168.56.1/Inventory_project_api/api/Lois/UpdateInventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
        // Make the API call to add history
        const historyData = {
          inventoryID: InventoryID,
          Older_Venue: Venue,
          New_Venue: venueValue,
          DateOfShifting: '12/6/2022',
        };

        fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddHistory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(historyData),
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            console.log(data);
          })
          .catch(error => {
            // Handle the error
            console.error(error);
          });
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  valueInput: {
    flex: 2,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateVanue;
