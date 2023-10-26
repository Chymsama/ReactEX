import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { useState } from 'react';
import DishDetail from './DishdetailComponent';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


function Menu({ dishes }) {
    const [selectedDish, setSelectedDish] = useState(null);

    // const onDishSelect = (dish) => {
    //     setSelectedDish(dish);
    // };


    const menu = dishes.map((dish) => (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

}


export default Menu;
