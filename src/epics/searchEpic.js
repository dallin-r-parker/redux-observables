import store from '../store'
import { Observable } from "rxjs";
import {updateList} from "../actions/index";
import axios from "axios";

export const searchEpic = action$ => {
    return action$.ofType('GET_SEARCH')
        .flatMap(action => {
            const { searchReducer } = store.getState();
            let { search } = searchReducer;

            return Observable.fromPromise(
                axios.get(`https://swapi.co/api/people/${search}/`)
                    .then(({data}) => updateList(data))
            )

        });
};