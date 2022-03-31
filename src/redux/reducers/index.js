import { combineReducers } from "redux";
import { petReducer, selectedPetsReducer } from "./petReducer";
import { loadingReducer } from "./utilityReducer";

const reducers = combineReducers({
    allPets: petReducer,
    selectedPets: selectedPetsReducer,
    isLoading: loadingReducer,
});

export default reducers;
