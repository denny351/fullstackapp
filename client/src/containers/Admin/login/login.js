import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions';
import styles from './login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		success: false
	};

	handleInputEmail = event => {
		this.setState({ email: event.target.value });
	};

	handleInputPassword = event => {
		this.setState({ password: event.target.value });
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.user.login.isAuth) {
			this.props.history.push('/user');
		}
	};

	submitForm = event => {
		event.preventDefault();
		this.props.dispatch(loginUser(this.state));
	};

	render() {
		let user = this.props.user;
		return (
			<div className={styles.login_container}>
				<form onSubmit={this.submitForm}>
					<h2>Log In</h2>

					<div className={styles.form_element}>
						<input
							type="email"
							placeholder="Enter your email"
							value={this.state.email}
							onChange={this.handleInputEmail}
						/>
					</div>

					<div className={styles.form_element}>
						<input
							type="password"
							placeholder="Enter your password"
							value={this.state.password}
							onChange={this.handleInputPassword}
						/>
					</div>

					<button type="submit">Log in</button>
					<div className={styles.error}>
						{user.login && <div>{user.login.message}</div>}
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Login);
