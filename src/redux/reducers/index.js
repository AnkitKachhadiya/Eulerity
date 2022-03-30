import { combineReducers } from "redux";
import { petReducer, selectedPetsReducer } from "./petReducer";

const reducers = combineReducers({
    allPets: petReducer,
    selectedPets: selectedPetsReducer,
});

export default reducers;
