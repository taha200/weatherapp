import React from 'react'
import {View,Text,ImageBackground} from 'react-native'



export default class AutoComp extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
  this.props.navigation.navigate("Home")
        },3000)
    }
    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('./abcd.png')}>
                    
            </ImageBackground>
        )
    }
}