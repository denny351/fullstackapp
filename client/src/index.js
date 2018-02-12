import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
