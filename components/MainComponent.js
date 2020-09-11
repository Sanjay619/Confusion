import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import HomeComponent from './HomeComponent'
import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dishdetail from './DishdetailComponent';


const  Stack = createStackNavigator();

function MyStack (){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name = "Home" component = {HomeComponent} />
            <Stack.Screen name = "Menu" component = {Menu} />
            <Stack.Screen name = "Dish Detail" component = {Dishdetail} />
         </Stack.Navigator>{}
         </NavigationContainer>
    )
}

const Drawer = createDrawerNavigator();

    function MyDrawerNavigator(){
        return(
            <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name = "Home" component = {HomeComponent} />
                <Drawer.Screen name = "Menu" component = {Menu} />
                <Drawer.Screen name = "Dish Detail" component = {Dishdetail} />
             </Drawer.Navigator>{}
             </NavigationContainer>
        )
    }
class Main extends Component {
    constructor(props){
        super(props);
    
    }

 
    render(){
        return(
        
             <MyDrawerNavigator />
 

        )
    }
}
export default Main;