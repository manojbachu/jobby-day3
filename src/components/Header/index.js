import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => (
  <>
    <div className="nav-sm-header">
      <img
        className="home-logo-image"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <div className="nav-header-elements">
        <AiFillHome className="headers-icon" />
        <BsFillBriefcaseFill className="headers-icon" />
        <FiLogOut className="headers-icon" />
      </div>
    </div>

    <div className="nav-lg-header">
      <img
        className="home-logo-image"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <div className="nav-lg-elements">
        <p className="nav-element">Home</p>
        <p className="nav-element">Jobs</p>
      </div>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </>
)

export default withRouter(Header)
