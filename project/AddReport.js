import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native"






useNavigation
export default function Signup(props)
{
    const [subject,setSubject] = useState('');
    const [disc ,setDisc] = useState('');
    const [rstatus, setRstatus] = useState('');
    
    
    // const addUser = async ()=> {
    // console.log('fafd');
    //   try {
    //     await fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddUser', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         Email: Email,
    //         Password: Password,
    //         InchargeOf: Inchargeoff,
  
    //       }),
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data == 'ok') {
    //           console.log('latitude',Email); 
    //           console.log('longnitude',Password);
    //           console.log('datetime ',Inchargeoff);
  
    //           alert('User Added Sucessfully!');
    //           navigation.navigate('Home');
    //         } 
    //         else alert('Something went problem! Error');
    //       });
    //   } catch (error) {
    //     console.log('POST submission failed');
    //     console.log(error.message);
    //   }
    // };
    
    const addUser = async () => {
      try {
        const userData = {
          Subject: subject,
          disc: disc,
          rStatus: rstatus,
        };
    
        const response = await fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddUser', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson["Email"]);
            alert('User added successfully');
        });
        
      } catch (error) {
        console.log('POST submission failed:', error.message);
        // Additional error handling logic
      }
    };
    

      

    return(
      
      
    
    
      

        <View style={styles.myBackground}>
          {/* <ImageBackground
        style={{width: '100%', height: '100%',marginBottom:25,marginTop:24}}
    source={require('../Assets/image1.jpg')}>*/}
        {/*<Image style={{width:100,height:100}}
        source={require('../Assets/Images/cctv.png')}
    />*/}
        {/*<View style={styles.myBox}>
        <Text style={{fontSize:20,color:'#339FFF',fontWeight:'bold'}}>M EYE PRO</Text>
    </View>*/}
        {/* <Text style={{fontSize:20,fontWeight:"bold",color:'#180A0A',}}>Create An Account</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{flexDirection:'row',marginTop:15}}>
        <Text>User</Text>
        <View style={{marginLeft:5,marginTop:-7}}>
        <RadioButton value="User" />
        </View> 
        <View style={{flexDirection:'row'}}>
        <Text>Responder</Text>
        <View style={{marginLeft:5,marginTop:-7}}>
        <RadioButton value="Responder" />
      </View>
      </View>
      </View>
     
      </RadioButton.Group> */}
     
        {/* <RadioButtonRN activecolor={'red'} deactivecolor={'#606161'}
        boxActiveBGcolor={'#D1D1D1'} boxDeactiveBGcolor={'#D1D1D1'}
        textcolor={'#606161'} data={options}
        style={{flexDirection: "row"}}
        selectedBtn={(e)=> console.log(e)}
        /> */}



               <View style={styles.myBox}>
        <TextInput  style={styles.inputStyle}
        placeholder='Email'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(subject)=>setSubject(subject)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Password'
        placeholderTextColor={'black'}
        autoCapitalize='none'


        onChangeText={(disc)=>setDisc(disc)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Inchargeoff'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(rstatus)=>setRstatus(rstatus)}
        />
        </View>
        <View style={{ height: 36 }} />
       
        
        <TouchableOpacity  onPress={()=>addUser()}>
                <Text
                style={{
                fontSize:20,
                fontWeight:'500',
                height:50,
                textAlign:'center',
                width: 200,  padding: 10,
                color:'#ffffff',
                textAlignVertical: 'center',
               // marginTop:50,
              //  paddingLeft:100,
               // paddingRight:100,
                backgroundColor:'#4D77FF',
                borderWidth:2,
                borderRadius:10,
                marginTop:12,
                borderColor:'#339FFF',
                }}>Add
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  onPress={()=>Signup()}>
                <Text
                style={{
                fontSize:20,
                fontWeight:'500',
                
                textAlign:'center',
                paddingLeft:50,
                paddingRight:50,
                color:'#ffffff',
               // marginTop:50,
              //  paddingLeft:100,
               // paddingRight:100,
                backgroundColor:'#4D77FF',
                borderWidth:2,
                borderRadius:10,
                marginTop:12,
                borderColor:'#339FFF',
                }}>Update status
                </Text>
            </TouchableOpacity> */}
            {/* <Text style={styles.txt}> Already a member ?</Text>
            <Text style={styles.sign}
            onPress={()=>props.navigation.navigate('Loginscreen')}>Login</Text> */}
            
          </View>
        
         
    
    
    );
}
const styles=StyleSheet.create({
    myBackground:
    {
        justifyContent:"center",
        flex:1,
        backgroundColor:"EEEBDD",
        
        alignItems:"center",
        //marginBottom:300,
    },
    myBox:
    {
        flexDirection:'row',
        height:40,
        marginTop:20,
        marginLeft:35,
        marginRight:35,
        margin:10,
    },
    inputStyle:
    {
      height: 50, borderColor: 'gray', borderWidth: 1, color: 'black',
        flex:1,
        paddingLeft:15,
        borderWidth:2,
        borderRadius:8,
        
    },
    sign:{
        
        marginLeft:40,
        fontWeight: 'bold',
        color: '#339FFF',
        fontSize:20,
    },
    txt:{
            marginLeft:40,
            marginTop:10,
            fontWeight:'bold',
        },
    
        
    
})
