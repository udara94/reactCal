import {combineReducers} from 'redux';
import {operatorReducer} from './operatorReducer';
import {helloReducer} from './helloReducer';

export default combineReducers({
    operatorx:operatorReducer,
    hello:helloReducer
});