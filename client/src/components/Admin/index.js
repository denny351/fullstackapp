import React from 'react'
import styles from './admin.css';

const User = (props) => {
  let user = props.user.login
  return (
    <div className={styles.user_container}>
      <div className={styles.avatar}>
        <img src="/images/profile.png" alt="avatar"/>
      </div>
      <div className={styles.info}>
        <div><span>Name: </span>{user.name}</div>
        <div><span>Last Name: </span>{user.lastname}</div>
        <div><span>Email: </span>{user.email}</div>
      </div>
    </div>
  )
}

export default User
