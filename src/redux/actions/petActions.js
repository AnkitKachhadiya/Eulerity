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

export const selectPet = (selectedPet) => {
    return {
        type: ActionTypes.SELECT_PET,
        payload: { selectedPet: selectedPet },
    };
};

export const unselectPet = (petId) => {
    return {
        type: ActionTypes.UNSELECT_PET,
        payload: { petId: petId },
    };
};
