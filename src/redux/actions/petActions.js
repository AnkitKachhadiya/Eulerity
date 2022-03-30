import { ActionTypes } from "../constants/action-types";

export const setPets = (pets) => {
    return {
        type: ActionTypes.SET_PETS,
        payload: { pets: pets },
    };
};

export const searchPets = (searchQuery) => {
    return {
        type: ActionTypes.SEARCH_PETS,
        payload: { searchQuery: searchQuery },
    };
};
