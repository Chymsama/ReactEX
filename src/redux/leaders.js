import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

// let leader = []
// fetch("localhost:3000/leaders")
//     .then(res => res.json())
//     .then(res => leader = res)

export const Leaders = (state =
    {
        isLoading: true,
        errMess: null,
        leaders: LEADERS || []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                leaders: action.payload
            };
        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] };
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] };
        default:
            return state;
    }
};