import React, { Component } from "react";
import {Text,View} from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";


export default class ThirdScreen extends Component
{
    constructor(){
        super()
        this.state={

        }
    }

    renderData(item)
    {
        const data=item
        //console.log("data is",data.item.author)
        return(
            <ScrollView>
            <View>
            <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',marginTop:20}}>
            Title:{data.item.title}</Text>
            <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',marginTop:20}}>
            Author:{data.item.author}
            </Text>
            <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',marginTop:20,borderBottomColor:'red',borderBottomWidth:5}}>
            URL:{data.item.url}
            </Text>
            </View>
            </ScrollView>
        )
    }

    render(){
        const data=this.props.route.params.data2
        //console.log("Value of data2",data.author)
        return(
            <View>
            <FlatList
            data={data}
            renderItem={item=>this.renderData(item)}
            keyExtractor={item=>item.id}

            />
            </View>
        )
    }
}