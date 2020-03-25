import {NEW_MESSAGES} from "./actionTypes";

export const messagesAC = (messages) => {
    debugger
    return {
        type: NEW_MESSAGES,
        messages
    }
};