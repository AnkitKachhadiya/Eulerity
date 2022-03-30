import { ActionTypes } from "../constants/action-types";

const initialState = {
    pets: [],
};

export const petReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PETS:
            return state;

        default:
            return state;
    }
};
