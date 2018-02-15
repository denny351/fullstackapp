import React from 'react'
import styles from './admin.css';

const User = () => {
  return (
    <div className={styles.user_container}>
      <div className={styles.avatar}>
        <img src="/images/profile.png" alt="avatar"/>
      </div>
      <div className={styles.info}>
        <div><span>Name: </span>name</div>
        <div><span>Last Name: </span>name</div>
        <div><span>Email: </span>name</div>
      </div>
    </div>
  )
}

export default User
