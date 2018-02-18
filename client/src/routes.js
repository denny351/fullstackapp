import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import GamePage from './containers/games_container';
import Login from './containers/Admin/login/login';
import User from './components/Admin';
import AddGame from './containers/Admin/addGame/addGame';
import UserReviews from './components/Admin/userReviews';
import EditGame from './containers/Admin/editGame/editGame';
import Register from './containers/Admin/register/register';
import Logout from './components/Admin/logout';

import Auth from './hoc/auth';

const Routes = () => {
	return <Layout>
			<Switch>
				<Route path="/" exact component={Auth(Home, null)} />
				<Route path="/game/:id" exact component={Auth(GamePage, null)} />
				<Route path="/login" exact component={Auth(Login, false)} />
				<Route path="/user/logout" exact component={Auth(Logout, true)} />
				<Route path="/user" exact component={Auth(User, true)} />
				<Route path="/user/add" exact component={Auth(AddGame, true)} />
				<Route path="/user/user-reviews" exact component={Auth(UserReviews, true)} />
				<Route path="/user/edit-post/:id" exact component={Auth(EditGame, true)} />
				<Route path="/user/register" exact component={Auth(Register, true)} />
			</Switch>
		</Layout>;
};

export default Routes;
