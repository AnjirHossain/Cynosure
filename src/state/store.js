import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from './reducers'
import initialState from './initialState'
import thunk from "redux-thunk";

const configureStore = initialState => {
	/**
	 * uis - short for ui state, solely responsible for
	 * ui state
	 */
	const rootReducer = combineReducers({
		tasks: reducers.tasks,
		/* All the following reducers manage ui state */
		uisTaskFormContainer: reducers.uisTaskFormContainer,
		uisTaskListContainer: reducers.uisTaskListContainer
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