import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from './reducers'
import initialState from './initialState'
import thunk from "redux-thunk";

const configureStore = initialState => {
	console.log(reducers);

	/**
	 * uis - short for ui state, solely responsible for
	 * ui state
	 */
	const rootReducer = combineReducers({
		uisAddTaskContent: reducers.addTasksCM,
		tasks: reducers.tasks
	});

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			thunk
		)
	);

	return store;
};

export default configureStore(initialState);