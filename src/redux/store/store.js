import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';

export const store = createStore(reducers, 
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);