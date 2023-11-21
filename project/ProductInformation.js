import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";

const HelloWorldApp = ({ navigation }) => {
  const [nam, setNam] = useState('');
  const [data, setMyUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let stat = "Pending";

  const getUserData = async () => {
    const response = await fetch(`http://192.168.56.1/Inventory_project_api/api/Lois/GetAllInventory`);
    const data = await response.json();
    setMyUserData(data);
    setIsLoading(false);
    console.log("RES2222====>> " + JSON.stringify(data));
    
  };

  useEffect(() => {
    getUserData();
  }, []);

  const navigateToNextScreen = (item) => {
    navigation.navigate('UpdateVanue', { item });
  };

  return (
    <View style={{ marginLeft: 30 }}>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigateToNextScreen(item)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                height: 155,
                borderColor: 'grey',
                borderWidth: 2,
                margin: 5
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, color: 'blue' }}>InventoryName: {item.InventoryName}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Venue: {item.Venue}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>IssueTo: {item.IssueTo}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Category: {item.Category}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>quantity: {item.quantity}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuName: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HelloWorldApp;
