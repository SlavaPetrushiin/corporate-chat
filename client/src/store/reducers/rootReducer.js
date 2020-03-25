import {combineReducers} from "redux";
import {messagesReducer} from "./messages";

export const rootReducers = combineReducers({
    messages: messagesReducer
});

