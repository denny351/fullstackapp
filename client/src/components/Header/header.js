import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './header.css';
import Nav from './Sidenav/sidenav';

class Header extends Component {
	state = {
		showNav: false
	};

	onHideNav = () => {
		this.setState({ showNav: false });
	};

	render() {
		return (
			<header className={styles.header}>
				<div className={styles.open_nav}>
          <FontAwesome name="bars" 
            onClick={() => this.setState({ showNav: true })} 
            style={{ color: 'white', padding: '10px', cursor: 'pointer' }} 
          />
				</div>
				<Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />
				<Link to="/" className={styles.logo}>
					Game Stack
				</Link>
			</header>
		);
	}
}

export default Header;
