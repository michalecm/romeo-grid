import { combineReducers } from 'redux';
import userGridReducer from './userGridReducer';

const rootReducer = combineReducers({
	userGridReducer,
});

export default rootReducer;
