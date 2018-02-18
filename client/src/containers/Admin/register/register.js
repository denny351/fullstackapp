import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, registerUser } from '../../../actions';

import styles from './register.css';

class Register extends PureComponent {
	state = {
		name: '',
		lastname: '',
		email: '',
		password: '',
		error: ''
	};

	componentWillMount = () => {
		this.props.dispatch(getUsers());
  };
  
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.user.register === false){
      this.setState({error: 'Error, try again'})
    } else {
      this.setState({ name: '', lastname: '', email: '', password: '' });
    }
  }
  

	handleInput = (event, name) => {
    this.setState({ [name]: event.target.value });
	};

	submitForm = e => {
    e.preventDefault();
    this.setState({error: ''});
    this.props.dispatch(registerUser(this.state, this.props.user.users))
	};

	showUsers = user =>
		user.users
			? user.users.map(item => (
					<tr key={item._id}>
						<td>{item.name}</td>
						<td>{item.lastname}</td>
						<td>{item.email}</td>
					</tr>
				))
			: null;

	render() {
		let user = this.props.user;
		return (
			<div className={styles.register_container}>
				<form onSubmit={this.submitForm}>
					<h2>Add user</h2>
					<div className={styles.form_element}>
						<input
							type="text"
							placeholder="Enter name"
							value={this.state.name}
							onChange={event => this.handleInput(event, 'name')}
						/>
						<input
							type="text"
							placeholder="Enter last name"
							value={this.state.lastname}
							onChange={event => this.handleInput(event, 'lastname')}
						/>
						<input
							type="email"
							placeholder="Enter email"
							value={this.state.email}
							onChange={event => this.handleInput(event, 'email')}
						/>
						<input
							type="password"
							placeholder="Enter password"
							value={this.state.password}
							onChange={event => this.handleInput(event, 'password')}
						/>
						<button type="submit">Add user</button>
						<div className={styles.error}>{this.state.error}</div>
					</div>
				</form>
				<div className={styles.current_users}>
					<h4>Current users:</h4>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Last Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{this.showUsers(user)}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)
