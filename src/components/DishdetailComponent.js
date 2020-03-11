import React from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap'

    function RenderComment({comments}){
        if (comments == null) {
            return(<div></div>)
        }
        const feedback = comments.map(comment =>{
            return(
                <li key = {comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, 
                    &nbsp;
                    {new Intl.DateTimeFormat('en-us', 
                        {year: 'numeric', month: 'long', day: 'numeric'
                    }).format(new Date(comment.date))}
                    </p>

                </li>
            );
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <h4>comments</h4>
                    {feedback}
                </ul>
            </div>)
    }
    function RenderDish({dish}){
        if(dish != null)
            return(
                <div className="col-12 col-md-5 m-1">                   
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>                           
                        </CardBody>
                    </Card>
                </div>
                );
        else
            return(
                <div></div>
                );
    }
    const DishDetail = (props) =>{       
        const dish = props.dish;
        if (dish == null) {
            return(
                <div></div>)
        }
        return (
            <div className="row">
                <RenderDish dish = {props.dish} />
                <RenderComment comments = {props.dish.comments}/>
            </div>
        );
    }

export default DishDetail