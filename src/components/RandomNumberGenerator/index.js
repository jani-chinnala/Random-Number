import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {value: 0}

  changeFunction = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({value: randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="miniContainer">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range between 0 to 100</p>
          <button className="box" type="button" onClick={this.changeFunction}>
            Generate
          </button>
          <p className="head">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
