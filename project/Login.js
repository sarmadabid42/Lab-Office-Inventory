import React, {useState,useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,


  
} from 'react-native';



export default function Login(props) {
  const [username, setusername] = useState('');
  const [Password, setPassword] = useState('');
  
  useEffect(()=>{
   // Login()
  },[])

  
  

     function loginUser(){
      console.log('hello sir ');
      if (username === 'zain' && Password === '123') {
        props.navigation.navigate('Home');
      } else {
        alert('data not found');
      }
}


        
        
      
  
             
       
             



            
             
      
      
          
      
  return (
    
    
    <View style={styles.container}>
      {/*<ImageBackground
      
        style={{width: '100%', height: '100%',marginBottom:25}}
  source={require('../Assets/Login.jpg')}>*/}
        <View style={styles.myBox}>
          {/*<Text
            style={{
              backgroundColor: '#52FF33',
              padding:20,width:"100%",
              fontSize: 20,
            }}>
            Welcome To On Road Help
          </Text>*/}
          {/* <Text style={{fontSize:20,padding:10,color:'#339FFF',}}onPress={()=>props.navigation.navigate('Forgetpassword')}>Forget your password</Text> */}
        </View>
        <View style={styles.myBox}>
          <TextInput
            style={styles.inputStyle}
            placeholder="UserName"
            autoCapitalize="none"
            placeholderTextColor={'black'}
            onChangeText={username => setusername(username)}
          />
        </View>
        <View style={styles.myBox}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor={'black'}
            //   secureTextEntry
            //   isSecure={true}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
             />
        
        
        </View>

        <TouchableOpacity onPress={() => loginUser()}>
          <Text 
            
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#ffffff',
              marginLeft: 90,
              marginRight: 90,
              backgroundColor: '#339FFF',
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              //margin:10,
              borderColor: '#339FFF',
            }}>
           
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Screen')}>
          <Text 
            
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#ffffff',
              marginLeft: 90,
              marginRight: 90,
              backgroundColor: '#339FFF',
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              margin:20,
              borderColor: '#339FFF',
            }}>
           
            Workshop
          </Text>
        </TouchableOpacity>
        {/* <Text style={styles.txt}>Not a member ?</Text> */}
        {/* <Text
          style={styles.sign}
          onPress={() => props.navigation.navigate('Signup')}>Signup now</Text> */}
         
      
    </View>
  );
}
const styles = StyleSheet.create({
  myBackground: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F6E7D8',

    alignItems: 'center',
  },
  myBox: {
    flexDirection: 'row',
    marginBottom:15,
    marginTop:30,
    
    // padding:20,
  //  textAlign:"center",
  //  display:"flex",
  //  alignItems:"center",
  //  justifyContent:"center",

  },
  inputStyle: {
    height: 50, borderColor: 'gray', borderWidth: 1, color: 'black',
    //backgroundColor: 'green',
    flex: 1,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#646464',
    marginLeft:50,
    marginRight:50,
  },
  txt: {
    fontWeight: '400',
    fontSize: 15,
    color: '#000000',
    marginTop: 10,
    marginLeft: 150,
  },
  sign: {
    color: '#339FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:150,
  },
});

