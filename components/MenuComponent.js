import React , { Component }from 'react'
import {View , FlatList, Text, StyleSheet} from 'react-native'
import ListItem, { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DISHES } from '../shared/dishes';


class Menu extends Component{
    
  constructor(props) {
      super(props);
      this.state  = {
        dishes :  DISHES
      };

    }

   


render(){
  const { navigate } = this.props.navigation;

  const renderItem = ({ item, index }) =>   {
    return(
        <TouchableOpacity style={styles.itemStyle} 
        onPress={() => navigate('Dish Detail', { dishId: item.id })} 
        data = {this.state.dishes}>
            <View style = {styles.itemNameView} >
              <Avatar size = {70} rounded source = {{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} />
              <Text style={[ styles.title ]}>{item.name}</Text>
              </View>
              <Text style={[ styles.desc ]}>{item.description}</Text>
          </TouchableOpacity>
    );
  }
  


   return(

     <FlatList 
          data = {this.state.dishes}
          renderItem={renderItem}
          keyExtractor = {item => item.id.toString()}
         />

           )
        }     
      
      }

    
    // )


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    itemStyle: {
      backgroundColor: "#cfd0d1",  
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      
    },
    itemNameView: {
      flexDirection : "row"
 },
    title: {
      fontSize: 22,
    },
    desc: {
        fontSize : 14
    }
  });
export default Menu;