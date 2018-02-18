import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import styles from '../header.css';

const SidenavItems = props => {
	const items = [
		{
			icon: 'home',
			text: 'Home',
			link: '/',
			restricted: false
		},
		{
			icon: 'file-text-o',
			text: 'My Profile',
			link: '/user',
			restricted: true
		},
		{
			icon: 'file-text-o',
			text: 'Add Admins',
			link: '/user/register',
			restricted: true
		},
		{
			icon: 'file-text-o',
			text: 'My reviews',
			link: '/user/user-reviews',
			restricted: true
		},
		{
			icon: 'file-text-o',
			text: 'Add reviews',
			link: '/user/add',
			restricted: true
		},
		{
			icon: 'sign-in',
			text: 'Login',
			link: '/login',
			restricted: false,
			exclude: true
		},
		{
			icon: 'sign-out',
			text: 'Logout',
			link: '/user/logout',
			restricted: true
		}
	];

	const element = (item, i) => (
		<div key={i} className={styles.navItem}>
			<Link to={item.link} onClick={props.onHideNav}>
				<FontAwesome name={item.icon} />
				{item.text}
			</Link>
		</div>
	);

	const showItems = () =>
		props.user.login
			? items.map((item, i) => {
					if (props.user.login.isAuth) {
						return !item.exclude ? element(item, i) : null;
					} else {
						return !item.restricted ? element(item, i) : null;
					}
				})
			: null;

	return <React.Fragment>{showItems()}</React.Fragment>;
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(SidenavItems);
