import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {currentStatus: true, currentValue: ''}

  onClickButton = () => {
    this.setState(prevState => ({currentStatus: !prevState.currentStatus}))
  }

  onChangeEvent = event => {
    this.setState({currentValue: event.target.value})
  }

  render() {
    const {currentStatus, currentValue} = this.state
    const currentButtonText = currentStatus ? 'Save' : 'Edit'
    return (
      <div className="main-container">
        <div className="small-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="outer-container">
            <div className="inner-container">
              {currentStatus ? (
                <input
                  className="input-container"
                  value={currentValue}
                  type="text"
                  onChange={this.onChangeEvent}
                />
              ) : (
                <p className="paragraph">{currentValue}</p>
              )}
            </div>
            <button
              className="save-button"
              type="button"
              onClick={this.onClickButton}
            >
              {currentButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
