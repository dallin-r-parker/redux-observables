import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { pingEpic } from "./epics";
import pingReducer from './reducers/pingpong'
import searchReducer from './reducers/search'
import {searchEpic} from "./epics/searchEpic";

const epicMiddleware = createEpicMiddleware(combineEpics(pingEpic, searchEpic));

function combine() {
    return {
        pingReducer,
        searchReducer
    }
}
export default createStore(combineReducers(combine()), applyMiddleware(epicMiddleware));