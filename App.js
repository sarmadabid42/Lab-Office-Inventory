/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// function Section({children, title}){
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(){
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
//import * as React from 'react'
//import React,{useState} from 'react';
//import { StyleSheet,Text } from 'react-native';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './project/Home';
import Login from './project/Login';
import status from './project/Status';
import Reports from'./project/Reports';
import ProductStatus from'./project/ProductStatus';
import ProductInformation from './project/ProductInformation';
import UpdataeVanue from './project/UpdateVanue';
import MaintenanceHistory from './project/MaintenanceHistory';
import workshop from './project/workshop';
import ViewReport from './project/ViewReport';
import user from './project/user';
import  Screen  from './project/Screen';
import AddReport from'./project/AddReport';



const Stack = createNativeStackNavigator();
export default function according(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Status" component={status}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Reports" component={Reports}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="ProductStatus" component={ProductStatus}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="ProductInformation" component={ProductInformation}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="UpdateVanue" component={UpdataeVanue}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="MaintenanceHistory" component={MaintenanceHistory}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="workshop" component={workshop}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="ViewReport" component={ViewReport}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="user" component={user}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Screen" component={Screen}options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="AddReport" component={AddReport}options={{headerTitleAlign:'center'}} />

        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  myBackground: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',

    alignItems: 'center',
  },
  myBox: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 0,
  },
  inputStyle: {
    color: '#000000',
    flex: 1,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#646464',
  },
  txt: {
    fontWeight: '400',
    fontSize: 12,
  },
  sign: {
    color: '#339FFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
});



  
