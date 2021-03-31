import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import musicReducer from './musicReducer';
import songsReducer from './songsReducer';
const reducer = combineReducers({
    music: musicReducer,
    songs: songsReducer,
});
const store = createStore(
  reducer, applyMiddleware(thunk)
)
export default store;