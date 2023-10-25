import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


function Main() {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
    }

    return (

        <div>
            <Header />
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
            <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
            <Footer />
        </div>
    );
}

export default Main;
