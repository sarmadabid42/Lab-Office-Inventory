import * as React from 'react';
import {
  StyleSheet,
  View,
  
  Text,
  TouchableOpacity,
} from 'react-native';
//import { FAB } from 'react-native-paper';
//import PushNotification from "react-native-push-notification";

const MyComponent = ({navigation }) => (
  <View style={styles.container}>
    {/* <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../Assets/Requests.jpg')}>
      <Text style={{backgroundColor:'#339FFF',width:'100%',fontSize:20,height:60,marginBottom:0,padding:17,paddingLeft:80,justifyContent:'center'}}> Welcome to On Road Help</Text> */}
      {/* <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => navigation.navigate('Service')}
  />    */}
      <TouchableOpacity onPress={() => navigation.navigate('ProductInformation')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          Product information
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reports')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          Product Reports
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Status')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          Add User
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Request')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          History
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Myservices')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          Summary
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('ProductStatus')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          Product Status
        </Text>
      </TouchableOpacity>
      {/* {/* <TouchableOpacity onPress={() => navigation.navigate('Torespond')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          To respond
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('MaintenanceHistory')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          MaintenanceHistory
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => navigation.navigate('workshop')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          workshop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ViewReport')}>
        <Text
          style={{
            padding:15,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: 50,
            marginRight: 50,
            backgroundColor: '#339FFF',
            borderWidth: 1,
            borderRadius: 40,
            marginTop: 15,
            borderColor: '#339FFF',
            textAlign: 'center',
          }}>
          View Report
        </Text>
      </TouchableOpacity>
    
  </View>
);

const createChannels = () =>{
  PushNotification.createChannel({
    channelId: "test-channel",
    channelName: "Test channel"
  })
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 7,
    right: 0,
    bottom: 0,
  },
});

export default MyComponent;