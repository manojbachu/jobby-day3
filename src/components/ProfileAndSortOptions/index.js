import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: '"FAILURE',
}

class ProfileAndSortOptions extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    profileDetails: {},
    searchInput: '',
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})

    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const profileDetails = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({profileDetails, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  profileCard = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-card">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="user-name">{name}</h1>
        <p className="short-bio">{shortBio}</p>
      </div>
    )
  }

  profileFailureView = () => (
    <div className="profile-failure">
      <button type="button" className="retry-button">
        Retry
      </button>
    </div>
  )

  loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileCard = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.profileCard()
      case apiStatusConstants.failure:
        return this.profileFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        {this.renderProfileCard()}
        <hr className="break-line" />
      </>
    )
  }
}

export default ProfileAndSortOptions
