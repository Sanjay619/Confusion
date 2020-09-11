import React, {Component} from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Dimensions, View } from 'react-native';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes :  DISHES,
            selectedDish : null
        };
    }

    onDishSelected(dishId){
            this.setState({selectedDish : dishId})
    }
    render(){
        return(
            <View style={{flex : 1}}>
                <Menu dishes = {this.state.dishes} onPress={(dishId) => this.onDishSelected(dishId)} />
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish) [0]}/>

            </View>
            
        )
    }
}
export default Main;