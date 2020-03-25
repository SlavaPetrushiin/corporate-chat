import {NEW_MESSAGES} from "../actions/actionTypes";

const initialState = [
    {
        userId: 1,
        name: 'Slava',
        message: 'Привет!',
    },
    {
        userId: 2,
        name: 'Ivan1988',
        message: 'Привет Коля!'
    }
];

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGES :
            debugger
            return [
                ...state, action.messages
            ];
        default:
            return state
    }
};

