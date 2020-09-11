import React from 'react'
import {View , FlatList, Text, StyleSheet} from 'react-native'
import ListItem, { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Menu (props){
    
    
    renderItem = ({ item, index }) => (
       <TouchableOpacity style={styles.itemStyle} onPress = {() => props.onPress(item.id)}>
          <View style = {styles.itemNameView} >
           <Avatar size = {70} rounded source = {{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} />
           <Text style={[ styles.title ]}>{item.name}</Text>
           </View>
           <Text style={[ styles.desc ]}>{item.description}</Text>
       </TouchableOpacity>
);

    return(
        <FlatList 
        data = {props.dishes}
        renderItem={renderItem}
        keyExtractor = {item => item.id.toString()}
        />
    )
}

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