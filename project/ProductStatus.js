import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from "react-native"
import { RadioButton } from 'react-native-paper';





useNavigation
export default function Signup(props)
{
    const [inventoryname,setInventoryname] = useState('');
    const [venue,setVenue] = useState('');
    const [issueto ,setIssueto] = useState('');
    const [category, setCategory] = useState('');
    const [quantity,setQunatity] = useState('');
    const [itemname,setItemname] = useState('');
    const [status,setStatus] = useState('');
    //const [value, setValue] = React.useState('User');

    let inventoryId = null;
    
    // 
    const addInvItem = async (id) => {
        
        try {
            
          const userData = {
            
            ItemName: itemname,
            Status: status,
            InventoryID: id
          };
          console.log('hellosdaasd are you');
          const response = await fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddInventoryItem', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
          .then(response => response.json())
          .then(responseJson => {
            
            
              alert('Inventory added successfully');
          });
          
        } catch (error) {
          console.log('POST submission failed:', error.message);
          // Additional error handling logic
        }
      };
    const updatestatus = async () => {
        
        try {
            
          const userData = {
            
            InventoryName: inventoryname,
            Venue: venue,
            IssueTo: issueto,
            Category:category,
            quantity:quantity,
          };
          console.log('hellosdaasd are you');
          const response = await fetch('http://192.168.56.1/Inventory_project_api/api/Lois/AddNewInventory', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
          .then(response => response.json())
          .then(responseJson => {
            console.log("is sisisisis "+responseJson);
            inventoryId = responseJson;
            console.log("is is "+inventoryId);
            console.log('Inventory ID is');
            
            console.log(inventoryId);
            addInvItem(inventoryId);
              alert('Inventory added successfully');
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
        placeholder='InventoryName'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(inventoryname)=>setInventoryname(inventoryname)}
        />
        </View>

               <View style={styles.myBox}>
        <TextInput  style={styles.inputStyle}
        placeholder='Category'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(Category)=>setCategory(Category)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Venue'
        placeholderTextColor={'black'}
        autoCapitalize='none'

        onChangeText={(venue)=>setVenue(venue)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Issueto'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(issueto)=>setIssueto(issueto)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Quantity'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        //secureTextEntry={true}
        onChangeText={(quantity)=>setQunatity(quantity)}
        />
        </View> 
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='ItemName'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(itemname)=>setItemname(itemname)}
        />
        </View>
        {/* <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Price'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        secureTextEntry={true}
        onChangeText={(price)=>setPrice(price)}
        />
        </View> */}
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Status'
        autoCapitalize='none'
        placeholderTextColor={'black'}
        onChangeText={(status)=>setStatus(status)}
        />
        </View>
        {/* <TouchableOpacity  onPress={()=>Signup()}>
                <Text
                style={{
                fontSize:20,
                fontWeight:'500',
                
                textAlign:'center',
                paddingLeft:80,
                paddingRight:80,
                color:'#ffffff',
               // marginTop:50,
              //  paddingLeft:100,
               // paddingRight:100,
                backgroundColor:'#4D77FF',
                borderWidth:2,
                borderRadius:10,
                marginTop:12,
                borderColor:'#339FFF',
                }}>Submit
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity  onPress={()=>updatestatus()}>
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
                }}>Add
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