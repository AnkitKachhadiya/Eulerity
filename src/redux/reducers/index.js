import { combineReducers } from "redux";
import { petReducer, selectedPetsReducer } from "./petReducer";

const reducers = combineReducers({
    allPets: petReducer,
    pet: selectedPetsReducer,
});

export default reducers;
