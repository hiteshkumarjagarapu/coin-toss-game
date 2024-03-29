import {Component} from 'react'

import './index.css'

export default class CoinToss extends Component {
  state = {isHead: true, h: 0, t: 0, total: 0}

  coinRes = () => {
    const res = Math.floor(Math.random() * 2)
    if (res === 0) {
      this.setState(prev => ({
        isHead: true,
        total: prev.total + 1,
        h: prev.h + 1,
      }))
    } else if (res === 1) {
      this.setState(prev => ({
        isHead: false,
        total: prev.total + 1,
        t: prev.t + 1,
      }))
    }
  }

  render() {
    const {isHead, h, t, total} = this.state
    const i = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={i} />
          <button type="button" onClick={this.coinRes}>
            Toss Coin
          </button>
          <div>
            <p>Total: {total}</p>
            <p>Heads: {h}</p>
            <p>Tails: {t}</p>
          </div>
        </div>
      </div>
    )
  }
}
