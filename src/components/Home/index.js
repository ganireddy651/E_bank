import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="app-container">
      <nav className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={onClickLogout} className="logout-btn" type="button">
          Logout
        </button>
      </nav>
      <div className="heading-and-card-container">
        <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
        <img
          className="digital-card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default withRouter(Home)
