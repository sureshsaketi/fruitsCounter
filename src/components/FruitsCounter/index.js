import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous mango count ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  onBananaIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous mango count ${prevState.mango}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="images-container">
            <div className="box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="submit"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                type="submit"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
