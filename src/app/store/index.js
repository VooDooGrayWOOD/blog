import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})

export function createStore () {
    return configureStore({
        reducer: rootReducer
    })
}