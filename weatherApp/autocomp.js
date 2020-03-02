import React from 'react'
import {View,Text} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Button,Icon} from 'react-native-elements'
import API from './key'
export default class AutoComp extends React.Component{
    state={
        lat:'',
        lng:''
    }
    geoCodeCoords=(place)=>{
      //AIzaSyDRBIi3meFD4Vj6Okb-hmvK6wKN2Wy9v5s
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${API}`)
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          this.setState({
              lat:data.results[0].geometry.location.lat,
              lng:data.results[0].geometry.location.lng
          })
      
      })
      .catch(err=>alert(err))
    }
    render(){
        return(
            <View style={{flex:1}}>
                 <View style={{width:wp('100%'),height:hp('8%'),alignItems:'center',justifyContent:'center',backgroundColor:"#00B5AD"}} >

<Text style={{color:'white',fontSize:25,fontFamily:'Gill Sans'}}>Weather Wear</Text>


    </View>
                <View style={{width:wp('100%'),height:hp('10%')}}></View>
                <View style={{width:wp('100%'),height:hp('50%')}}>
    <GooglePlacesAutocomplete
    
        placeholder='Search'
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details) => { // 'details' is provided when fetchDetails = true
        //   console.log(data);
          this.geoCodeCoords(details.formatted_address)
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: API,
          language: 'en', // language of the results
          types: '(cities)', // default: 'geocode'
        }}
        styles={{
            textInput:{ height:'78%', fontSize:20 }, textInputContainer: { width: '100%', height:'20%' ,backgroundColor:'#00B5AD'},
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        
    
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
        GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: 'formatted_address',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

      />
      </View>
      <View style={{width:wp('17%'),height:hp('9%'),backgroundColor:'#00B5AD',borderRadius:100,justifyContent:'center',alignItems:'center',position:'absolute',bottom:50,right:35}}>
      <Icon
  name='right'
  type='antdesign'
  color='white'
  size={30}
  onPress={()=>{
      if(this.state.lat===""||this.state.lng===""){
          alert("Enter the place")
      }
      else{
        this.props.navigation.navigate("Details",{
            lati:this.state.lat,
            longi:this.state.lng
          })
      }
 
  }}
/>
</View>
            </View>
        )
    }
}