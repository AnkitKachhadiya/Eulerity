import { ActionTypes } from "../constants/action-types";

const initialPetReducerState = {
    pets: [],
    filteredPets: [],
};

export const petReducer = (
    state = initialPetReducerState,
    { type, payload }
) => {
    switch (type) {
        case ActionTypes.SET_PETS:
            return { ...state, pets: payload.pets, filteredPets: payload.pets };

        case ActionTypes.SEARCH_PETS:
            const searchQuery = payload.searchQuery.trim();

            const filteredPets = state.pets.filter((currentPet) => {
                if (searchQuery.length < 1) {
                    return currentPet;
                }

                if (
                    currentPet.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    currentPet.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                ) {
                    return currentPet;
                }

                return false;
            });

            return { ...state, filteredPets: filteredPets };

        default:
            return state;
    }
};

export const selectedPetsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_PET:
            return [...state, { ...payload.selectedPet }];
        case ActionTypes.UNSELECT_PET:
            return state.filter(
                (currentPet) => currentPet.key !== payload.petId
            );
        default:
            return state;
    }
};
