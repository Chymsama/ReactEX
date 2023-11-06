import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

let feedback = [];

fetch("http://localhost:3000/feedback")
    .then(res => res.json())
    .then(res => feedback = res)

export const Comments = (state = feedback, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default:
            return state;
    }
};

