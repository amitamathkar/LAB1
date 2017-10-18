import {ADD} from "../actions/index";

import {createStore , applyMiddleware } from "redux";
import {combineReducers} from 'redux'
import {createLogger as logger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const number = {value1:1,value2:2,result:0,operator:''}
const reducer = (state = number, action) => {
	switch(action.type)
	{
		case "FIRST":
console.log("received"+action.payload);
		return Object.assign({},state,{value1:action.payload})
            			//return {...state,value1:action.payload}
			//console.log(state.value1);
			break;
		case "SECOND":
			return Object.assign({},state,{value2:action.payload})
			//console.log(state.value2);
			break;

		case "CALC":
		console.log("acscscscsd:"+action.payload);
		return Object.assign({},state,{result:action.payload})
		break;
	}
    return state;
};

const middleware=applyMiddleware(promise(),thunk,logger());

const combine=combineReducers({reducer})
const store=createStore(combine,middleware);
export default store;