import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class EbankLogIn extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeUserID = event => {
    this.setState({username: event.target.value})
  }

  onChangePIN = event => {
    this.setState({password: event.target.value})
  }

  onSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureView = errorMessage => {
    this.setState({showErrorMessage: true, errorMessage})
  }

  onFormSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSuccessView(data.jwt_token)
    } else {
      this.onFailureView(data.error_msg)
    }
  }

  render() {
    const {UserID, PIN, errorMessage, showErrorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <img
            className="login-image"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <form onSubmit={this.onFormSubmit} className="form-container">
            <h1>Welcome Back</h1>
            <div className="input-container">
              <label className="label-text" htmlFor="userId">
                User ID
              </label>
              <br />
              <input
                onChange={this.onChangeUserID}
                value={UserID}
                className="input-field"
                placeholder="Enter User ID"
                type="text"
                id="userId"
              />
            </div>
            <div className="input-container">
              <label className="label-text" htmlFor="userId">
                PIN
              </label>
              <br />
              <input
                onChange={this.onChangePIN}
                value={PIN}
                className="input-field"
                placeholder="Enter PIN"
                type="text"
                id="userId"
              />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showErrorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default EbankLogIn
