import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const addLeaders = (leaders) => (
    {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    }
)

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    // Fetch leaders data from the server
    fetch('http://localhost:3000/leaders')
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then((response) => response.json())
        .then((leaders) => dispatch(addLeaders(leaders)))
        .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});


export const postFeedback = (feedback) => (dispatch) => {
    // Prepare the feedback data
    const newFeedback = {
        firstname: feedback.firstname,
        lastname: feedback.lastname,
        telnum: feedback.telnum,
        email: feedback.email,
        agree: feedback.agree,
        contactType: feedback.contactType,
        message: feedback.message,
        date: new Date().toISOString(),
    };

    // Use the fetch API to write to the JSON file
    fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then((feedback) => {
            // console.log('Feedback:', feedback);  
            // dispatch(addFeedback(feedback)); // Assuming you have an action to add feedback to your store
        })
        .catch((error) => dispatch(feedbackFailed(error.message)));
};

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback,
});

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess,
});
