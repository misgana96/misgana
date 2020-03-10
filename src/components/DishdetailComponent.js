import React, { Component } from 'react'
import {Card, CardBody, CardText} from 'reactstrap'

export default class DishDetail  extends Component {
    constructor(props){
            super(props);
            this.state={
                    selectDishes: null
            };
    }
    DishSelect(dish){
            this.setState({selectDishes:dish})
    }

    render() {
        const selectedDish = this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key = {dish.id}>
                        onClick = {()=>this.DishSelect(dish)}
                        <CardText> {dish.description}</CardText>
                        <CardText> {dish.comments.comment}</CardText>
                    </Card>
                </div>
            )
        })
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectDishes)}
                </div>
            </div>
        )
    }
}
