import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';

function Main() {
    const [dishes] = useState(DISHES);
    const [comments] = useState(COMMENTS);
    const [promotions] = useState(PROMOTIONS);
    const [leaders] = useState(LEADERS);
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dishId) => {
        setSelectedDish(dishId);
    }

    const HomePage = () => {
        return (
            <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promo) => promo.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }
    const DishWithId = ({ match }) => {
        const selectedDish = dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0];
        const dishComments = comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10));

        return (
            <DishDetail dish={selectedDish} comments={dishComments} />
        );
    };


    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
                <Route exact path='/contactus' component={Contact} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/aboutus' component={() => <About leaders={leaders} />} />
                <Redirect to="/home" />
            </Switch>
            {/* <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} /> */}
            <Footer />
        </div>
    );
}

export default Main;
