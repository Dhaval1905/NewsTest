import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class SecondScreen extends Component
{
    render(){
        const created_at=this.props.route.params.created_at
        const title= this.props.route.params.title
        const author=this.props.route.params.author
        const url=this.props.route.params.url
        const objectId=this.props.route.params.object_ID
        const created_at_i=this.props.route.params.created_at_i
       // console.log("Data",data)
        return(
            <View>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:50}}>Created_AT:{created_at}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:20}}>Title:{title}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:20}}>Author:{author}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:20}}>URL:{url}
            </Text>

            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:20}}>ObjectID:{objectId}
            </Text>

            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:20,marginTop:20}}>Created_AT_I:{created_at_i}
            </Text>
            </View>
        )
    }
}