import { ActionTypes } from "../constants/action-types";

export const loadingOn = () => {
    return {
        type: ActionTypes.LOADING_ON,
    };
};

export const loadingOff = () => {
    return {
        type: ActionTypes.LOADING_OFF,
    };
};
