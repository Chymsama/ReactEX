import React, { useState } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../redux/ActionCreators';
import { fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    };
};
const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),

    fetchDishes: () => { dispatch(fetchDishes()) },

    // resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});

function Main() {
    const dishes = useSelector((state) => state.dishes);
    //useSelector hook from React Redux to access the cartItems array from the Redux store
    const comments = useSelector((state) => state.comments);
    const promotions = useSelector((state) => state.promotions);
    const leaders = useSelector((state) => state.leaders);
    //useSelector hook from React Redux to access the lastItemId from the Redux store
    const [selectedDish, setSelectedDish] = useState(null);
    const dispatch = useDispatch();


    const resetFeedbackForm = () => { dispatch(actions.reset('feedback')) }
    
    function onDishSelect(dishId) {
        setSelectedDish(dishId);
    }


    const HomePage = () => {
        return (
            dishes && promotions && leaders &&
            <Home
                dish={dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                    promotions.filter(
                        (promo) => promo.featured
                    )[0]
                }
                leader={
                    leaders.filter(
                        (leader) => leader.featured
                    )[0]
                }
                dishesLoading={dishes.isLoading}
                dishesErrMess={dishes.errMess}

            />

        );
    };
    const DishWithId = ({ match }) => {
        return (
            dishes && promotions &&

            <DishDetail
                dish={
                    dishes.dishes.filter(
                        (dish) =>
                            dish.id === parseInt(match.params.dishId, 10)
                    )[0]
                }
                comments={comments.filter(
                    (comment) =>
                        comment.dishId === parseInt(match.params.dishId, 10)
                )}
                addComment={addComment}
                isLoading={dishes.isLoading}
                errMess={dishes.errMess}

            />
        );
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route
                    exact
                    path="/menu"
                    component={() => <Menu dishes={dishes.dishes} />}
                />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route
                    path="/aboutus"
                    component={() => <About leaders={leaders} />}
                />
                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={resetFeedbackForm} />} />
                <Redirect to="/home" />
            </Switch>

            {dishes && <DishDetail
                dish={
                    dishes.dishes.filter(
                        (dish) => dish.id === selectedDish
                    )[0]
                }
            ></DishDetail>}
            <Footer />
        </div>
    );
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));