import { createStore, combineReducers, applyMiddleware } from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

//Reducers
import { postsReducer } from './reducers/postsReducer';

const middleware = applyMiddleware(promise(), logger, thunk);

const reducers = combineReducers({
    posts: postsReducer,
    //users: usersReducer,
});

const store = createStore(reducers, middleware);
export default store;