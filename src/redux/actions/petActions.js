import { ActionTypes } from "../constants/action-types";

export const setPets = (pets) => {
    return {
        type: ActionTypes.SET_PETS,
        payload: pets,
    };
};
