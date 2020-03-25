import {NEW_MESSAGES} from "./actionTypes";

export const messagesAC = (message) => {
    return {
        type: NEW_MESSAGES,
        message
    }
};