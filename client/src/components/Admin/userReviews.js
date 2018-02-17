import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserReviews } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

import styles from './userReviews.css';

class UserReviews extends Component {

  componentWillMount = () => {
    this.props.dispatch(getUserReviews(this.props.user.login.id))
  }

  showUserReviews = (user) => (
    user.userReviews 
    ? user.userReviews.map(item => (
      <tr key={item._id}>
        <td><Link to={`/user/edit-post/${item._id}`}>{item.name}</Link></td>
        <td>{item.developer}</td>
        <td>{moment(item.createdAt).format("MM/DD/YY")}</td>
      </tr>
    ))
    : null
  )
  
  render() {
    let user = this.props.user;
    return (
      <div className={styles.user_reviews}>
        <h4>Your reviews:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Developer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.showUserReviews(user)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserReviews);
