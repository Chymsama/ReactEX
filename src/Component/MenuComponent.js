import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle
} from 'reactstrap';
import { useState } from 'react';
import DishDetail from './DishdetailComponent';



function Menu({ dishes }) {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish);
    };

    const renderDish = (dish) => {
        if (dish != null) {
            return (
                <DishDetail dish={selectedDish} />
            );
        } else {
            return <div></div>;
        }
    };

    const menu = dishes.map((dish) => (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card onClick={() => onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">{menu}</div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">{renderDish(selectedDish)}</div>
            </div>
        </div>
    );
}


export default Menu;
