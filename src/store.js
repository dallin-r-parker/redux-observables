import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { pingEpic } from "./epics";
import pingReducer from './reducers/pingpong'
import searchReducer from './reducers/search'

const epicMiddleware = createEpicMiddleware(pingEpic);
function combine() {
    return {
        pingReducer,
        searchReducer
    }
}
export default createStore(combineReducers(combine()), applyMiddleware(epicMiddleware));