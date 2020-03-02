import React,{Component} from 'react';
import {Button,Text,Icon,Overlay,CheckBox,Header,Card,ButtonGroup} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,ProgressBarAndroid,ImageBackground,ActivityIndicator
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Range3 from './range3'
import { getActionFromState } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


class Details extends Component{
   constructor(props){
     super(props);
     this.state={
       stay:true,
        temp:'',
        city:'',
        precipitate:'',
        time:'',
        head:'',
        neck:'',
        body:'',
        hands:'',
        pants:'',
        shoes:'',
        umbrella:"No"
      }

   }

  componentDidMount(){
        
  fetch(`https://api.weatherbit.io/v2.0/current?lat=${this.props.route.params.lati}&lon=${this.props.route.params.longi}&key=fd7cc018727f48cf90ab490f39354b45`)
   .then(res=>res.json())
   .then(data=>{
        var obj=data.data[0]
        var abc = obj.ob_time.split(" ")
     
        this.setState(
          {
            city:obj.city_name,
            temp:obj.temp,
            precipitate:obj.precip.toFixed(2),
            time:abc[1]
          }
        )
       if(obj.temp <= 3){
         if(obj.precip>50){
           this.setState({
             umbrella:"yes"
           })
         }
         this.setState({
            head:Range3.head,
            neck:"Scarf",
            body:"Heat Tech, Wool Sweater, Duffle Coat",
            hands:"Gloves",
            pants:"Insulated Pants",
            shoes:"Waterproof Boots",
            stay:false
         })
       }
      else if(obj.temp >= 4 && obj.temp <=9){
        if(obj.precip>50){
          this.setState({
            umbrella:"yes"
          })
        }
        this.setState({
          head:"None",
          neck:"Scarf",
          body:"Shirt, Swrater and OverCoat",
          hands:"Gloves",
          pants:"Sweat Pants",
          shoes:"Sneakers",
          stay:false
        })
      }
      else {
        if(obj.precip>50){
          this.setState({
            umbrella:"yes"
          })
        }
        this.setState({
          head:"None",
          neck:"None",
          body:"Shirt, Hoodie, DenimJacket",
          hands:"None",
          pants:"Jeans",
          shoes:"Sneakers",
          stay:false
        })
      }
   })
   .catch(err=>console.log(err))
}

    render(){
     

    

        return (
          <View style={{flex:1,backgroundColor:'white'}}>
            {(this.state.stay)?
            <View style={{alignItems:'center',justifyContent:'center',width:wp('100%'),height:hp('100%')}}>
            <ActivityIndicator color="#00B5AD" size="large" />
            </View>
            :
              <View>
      <View style={{width:wp('100%'),height:hp('8%'),flexDirection:'row',justifyContent:'space-between',backgroundColor:"#00B5AD"}} >
<View style={{flexDirection:'row'}}>
<Icon
  name='ios-arrow-back'
  type='ionicon'
  color='white'
  size={35}
  onPress={()=>this.props.navigation.navigate("Home")}
  containerStyle={{alignSelf:'flex-end',marginLeft:10,marginBottom:10}}
/>
<Text style={{marginBottom:15,color:'white',textAlignVertical:'bottom',fontSize:25,fontFamily:'Gill Sans',marginLeft:25}}>Details</Text>
</View>


    </View>
    <View style={{flexDirection:'row',marginTop:8}}>
        <View style={{width:wp("50%"),height:hp("8%"),borderRightWidth:1,borderRightColor:'black',borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',backgroundColor:"#00B5AD",justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'white'}}>City: {this.state.city}</Text>

        </View>
        <View style={{width:wp("50%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'white'}}>Time: {this.state.time}</Text>

            </View>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{width:wp("50%"),height:hp("8%"),borderRightWidth:1,borderRightColor:'black',borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',backgroundColor:"#00B5AD",justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'white'}}>Temperature: {this.state.temp} C</Text>

        </View>
        <View style={{width:wp("50%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'white'}}>Precpitation: {this.state.precipitate} %</Text>

            </View>

    </View>
    <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:2,borderTopColor:'black',justifyContent:'center',marginTop:50}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Head: {this.state.head}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Neck: {this.state.neck}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Body: {this.state.body}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Hands: {this.state.hands}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Pants: {this.state.pants}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:1,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Shoes: {this.state.shoes}</Text>

            </View>
            <View style={{width:wp("100%"),height:hp("8%"),backgroundColor:"#00B5AD",borderBottomWidth:2,borderBottomColor:'black',borderTopWidth:1,borderTopColor:'black',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'white',marginLeft:15}}>Umbrella: {this.state.umbrella}</Text>

            </View>
              </View>
          }
 

    </View>
      
          );
    }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default Details;