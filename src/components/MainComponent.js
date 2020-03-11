import React, { Component } from 'react'

import Home from './HomeComponent'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './ContactComponent'
import {DISHES} from '../shared/dishes'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import {COMMENTS} from '../shared/comments'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }
  render(){
    const HomePage = () =>{
      return(
        <Home 
        dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion = {this.state.promotions.filter((promo) =>promo.featured)[0]}
        leader = {this.state.leaders.filter((leader) =>leader.featured)[0]}

        />
        );
    }
      return (
        <div>
          <Header/>
          <Switch>
            <Route path ="/home" component={HomePage}/>
            <Route exact path = "/menu" component={() =><Menu dishes = {this.state.dishes}/>}/>
            <Route exact path = "/contactus" component={Contact}></Route>
            <Redirect to ="/home"/>
          </Switch>
          <Footer/>
        </div>
  );
  }
}

export default Main;
