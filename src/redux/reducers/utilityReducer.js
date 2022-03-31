import { ActionTypes } from "../constants/action-types";

export const loadingReducer = (state = false, { type }) => {
    switch (type) {
        case ActionTypes.LOADING_ON:
            return true;
        case ActionTypes.LOADING_OFF:
            return false;
        default:
            return state;
    }
};
