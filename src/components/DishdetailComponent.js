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
    renderDish(dish){
        if(dish != null)
            return(
                <Card>
                    <CardBody className="col-12 col-sm-5 col-md-5">
                        <CardText> {dish.description}</CardText>
                        <CardText> {dish.comments.comment}</CardText>
                    </CardBody>
                </Card>
            )
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 col-m-1">
                    {this.renderDish(this.state.selectDishes)}
                </div>
            </div>
        )
    }
}
