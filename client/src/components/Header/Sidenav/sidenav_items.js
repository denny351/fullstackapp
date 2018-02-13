import React from 'react'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import styles from '../header.css';

const SidenavItems = (props) => {
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
			restricted: false
		},
		{
			icon: 'file-text-o',
			text: 'Add Admins',
			link: '/user/register',
			restricted: false
		},
		{
			icon: 'file-text-o',
			text: 'My reviews',
			link: '/user/user-reviews',
			restricted: false
		},
		{
			icon: 'file-text-o',
			text: 'Add reviews',
			link: '/user/add',
			restricted: false
    },
    {
			icon: 'sign-in',
			text: 'Login',
			link: '/login',
			restricted: false
		},
		{
			icon: 'sign-out',
			text: 'Logout',
			link: '/user/logout',
			restricted: false
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
		items.map((item, i) => {
			return element(item, i) 
		})


	return <React.Fragment>{showItems()}</React.Fragment>;
};

export default SidenavItems
