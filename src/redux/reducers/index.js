import { combineReducers } from "redux";
import { petReducer } from "./petReducer";

const reducers = combineReducers({
    allPets: petReducer,
});

export default reducers;
