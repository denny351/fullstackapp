import React from 'react';
import { Link } from 'react-router-dom';
import styles from './game_item.css';

const GameItem = (item) => {
  return (

      <Link to={`/game/${item._id}`} className={styles.game_item}>
        <div className={styles.game_header}>
          <h2>{item.name}</h2>
        </div>
        <div className={styles.game_items}>
          <div className={styles.game_developer}>{item.developer}</div>
          <div className={styles.game_bubble}><strong>Price</strong> ${item.price}</div>
          <div className={styles.game_bubble}><strong>Released</strong> {item.released}</div>
          <div className={styles.game_bubble} style={{background: '#5f5f5f'}}><strong>Rating</strong> {item.rating}</div>
        </div>
      </Link>
  )
}

export default GameItem
