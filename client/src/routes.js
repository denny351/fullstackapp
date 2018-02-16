import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import GamePage from './containers/games_container';
import Login from './containers/Admin/login';
import User from './components/Admin';
import AddGame from './containers/Admin/addGame';

import Auth from './hoc/auth';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Auth(Home, null)} />
				<Route path="/game/:id" exact component={Auth(GamePage, null)} />
				<Route path="/login" exact component={Auth(Login, false)} />
				<Route path="/user" exact component={Auth(User, true)} />
				<Route path="/user/add" exact component={Auth(AddGame, true)} />
			</Switch>
		</Layout>
	);
};

export default Routes;
