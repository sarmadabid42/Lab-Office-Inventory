import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native"






useNavigation
export default function Signup(props)
{
    const [outdate,setOutdate] = useState('');
    const [indate,setIndate] = useState('');
    const [description ,setDescription] = useState('');
    const [charges, setCharges] = useState('');
    const [vendername,setVendername] = useState('');
    const [vendercontactno,setVendercontactno] = useState('');
    //const [status,setStatus] = useState('');
    //const [value, setValue] = React.useState('User');

    let inventoryId = null;
    
    // 
    const addInvItem = async () => {
        
        try {
            
          const userData = {
            
            OutDate: outdate,
            InDate: indate,
            Descriptions: description,
            Charges:charges,
            VendorContact:vendercontactno,
            VendorName:vendername,
          };
          console.log('hellosdaasd are you');
          const response = await fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddMaintainance', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
          .then(response => response.json())
          .then(responseJson => {
            
            console.log(responseJson);
              alert('Maintenance added successfully');
          });
          
        } catch (error) {
          console.log('POST submission failed:', error.message);
          // Additional error handling logic
        }
      };
   
      
      

    return(
      
      
    
    
      

        <View style={styles.myBackground}>
        

<View style={styles.myBox}>
        <TextInput  style={styles.inputStyle}
        placeholder='OutDate'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(outdate)=>setOutdate(outdate)}
        />
        </View>

               <View style={styles.myBox}>
        <TextInput  style={styles.inputStyle}
        placeholder='In Date'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(indate)=>setIndate(indate)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Description'
        placeholderTextColor={'black'}
        autoCapitalize='none'

        onChangeText={(description)=>setd(description)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Chrges'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(charges)=>setCharges(charges)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Vender Name'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        //secureTextEntry={true}
        onChangeText={(vendername)=>setVendername(vendername)}
        />
        </View> 
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Vender Contact No'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(vendercontactno)=>setVendercontactno(vendercontactno)}
        />
        </View>
       
            <TouchableOpacity  onPress={()=>addInvItem()}>
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
                }}>Add MaintenanceHistor
                </Text>
            </TouchableOpacity>
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
    
        
    
});