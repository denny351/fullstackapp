import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGameWithReviewer, clearGamePage } from '../actions';
import styles from './gamePage.css'


class GamePage extends Component {

  componentWillMount = () => {
    this.props.dispatch(getGameWithReviewer(this.props.match.params.id));
  }

  componentWillUnmount = () => {
    this.props.dispatch(clearGamePage())
  }
  
  
  renderGame = (games) => (
    games.game 
    ? (
      <div className={styles.gr_container}>
        <div className={styles.gr_header}>
          <h2>{games.game.name}</h2>
          <h5>{games.game.developer}</h5>
          <div className={styles.gr_reviewer}>
            <span>Review by:</span> {games.reviewer.name} {games.reviewer.lastname}
          </div>
          <div className={styles.gr_review}>
            {games.game.review}
          </div>
          <div className={styles.gr_box}>
            <div className={styles.left}>
              <div>
                <span>Released:</span>{games.game.released}
              </div>
              <div>
                <span>Price:</span> {games.game.price}
              </div>
            </div>
            <div className={styles.right}>
              <span>Rating</span>
              <div>{games.game.rating}/5</div>
            </div>
          </div>
        </div>   
      </div>
    )
    : null
  )

  render() {
    let games = this.props.games;
    return (
      <div>
        {this.renderGame(games)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(GamePage)
