import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList, Alert, Button} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default class FirstScreen extends Component{
    static navigationOptions = ({navigation}) => ({
        header: null,
    });
    constructor(props) {
        super(props);
        this.state={
            data:[],
            loading:false,
            page:0,
            news:'',
            text:''
        }
        
    }
    Api(){
       // const { page,dataSource } = this.state;
       // console.log("page",page)
        fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page="+this.state.page)
            .then(response => response.json())
            .then((responseJson)=> {
                this.setState({
                    data: [...this.state.data,...responseJson.hits]
                })
               // console.log(this.state.data)
            })
            .catch(error=>console.log(error))
    }
    componentDidMount(){
         
        // this.Api(),
         setInterval(()=>{
            this.Api()
          },10000)
}
   
    renderItem(route){
        const data=route.item
       // console.log("data",JSON.stringify(data.created_at))
        const created_at=data.created_at,title=data.title,author=data.author,url=data.url,object_ID=data.objectID,
        created_at_i=data.created_at_i
        return(
            <View style={{alignItems:'center',}}>
                <TouchableOpacity
                    onPress={()=>
                    this.props.navigation.navigate('SecondScreen',{
                        created_at:data.created_at,
                        title:data.title,
                        author:data.author,
                        url:data.url,
                        object_ID:object_ID,
                        created_at_i:created_at_i
     })}
         style={{marginTop:10,margin:20,borderWidth:1,width:'100%',
                        height:'auto' }}>
         
         <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft:10}}>Author:</Text>
         <Text style={{marginLeft:10}}>{author}</Text> 

         <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft:10}}>Title:</Text>
         <Text style={{marginLeft:10}}>{title}</Text>
                   
         <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft:10}}>URL:</Text>
         <Text style={{marginLeft:10}}>{url}</Text>
          
         <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft:10}}>CreatedAT:</Text>
         <Text style={{marginLeft:10}}>{created_at}</Text>
    </TouchableOpacity>
            </View>
        )
    }
// handlemore=()=>{
//     this.setState(
//         {
//             page:this.state.page+1
//         },this.Api
//     )
// }

searchData() {
        const{text}=this.state
        const data2=this.state.data.filter((ele)=>{
            return(
            ele.title.toLowerCase().includes(text.toLowerCase())||
            ele.author.toLowerCase().includes(text.toLowerCase())
            ) 
        })
        console.log("Data2 is",data2)
       this.props.navigation.navigate("ThirdScreen",
       {
           data2:data2
       })
        
    }

    asendingOrderCreated(){
    var sorted = this.state.data;
     sorted.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));

        this.setState({
        data: sorted,
        });
        
    }

    asendingOrdertitle(){
        var sorted = this.state.data;
     sorted.sort((a, b) => (a.title > b.title ? 1 : -1));
       console.log("Title",sorted)
        this.setState({
        data: sorted,
        });
    }

render(){
 return (
    <ScrollView>    
    <View style={{marginTop: 40, alignItems: 'center'}}>
            <TextInput
            placeholder="Enter the details"
            value={this.state.text}
            onChangeText={(text) => this.setState({text:text})}
            style={{marginTop:10,fontSize:20,borderRadius:5,borderWidth:2,fontWeight:'bold',textAlign:'center',alignContent:'center',marginLeft:10,marginRight:10}}
            />
           <Button
           onPress={()=>this.searchData()}
           title="Submit"
           style={{marginTop:50,marginLeft:20}}
           />
           <Button
             title="AscendingOrderforCreated"
            onPress={()=>this.asendingOrderCreated()}
            style={{marginTop:50,backgroundcolor:'#00ffff'}}
            /> 

          <Button
            title="AscendingOrderforTitle"
            onPress={()=>this.asendingOrdertitle()}/> 
               
           

         <FlatList
             data={this.state.data}
             renderItem={item => this.renderItem(item)}
             keyExtractor={item => item.id} 
            // onEndReached={this.handlemore}
             />
      </View>
      </ScrollView>
          );
        }
      }
