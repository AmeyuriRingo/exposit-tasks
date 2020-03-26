import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const initialState = {

}

export const rootReducer = combineReducers({
    users: userReducer
})