import {Component} from 'react'

import './index.css'

class ReviewsCarousal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsList: props.reviewsList,
      currentReviewCounter: 0,
    }
  }

  increaseCounter = () => {
    const {currentReviewCounter, reviewsList} = this.state

    if (currentReviewCounter === reviewsList.length - 1) {
      this.setState({currentReviewCounter: reviewsList.length - 1})
    } else {
      this.setState({
        currentReviewCounter: currentReviewCounter + 1,
      })
    }
  }

  decreaseCounter = () => {
    const {currentReviewCounter} = this.state

    if (currentReviewCounter === 0) {
      this.setState({currentReviewCounter: 0})
    } else {
      this.setState({
        currentReviewCounter: currentReviewCounter - 1,
      })
    }
  }

  render() {
    const {reviewsList, currentReviewCounter} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      currentReviewCounter
    ]

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="review-container">
            <div className="user-image-container">
              <img src={imgUrl} alt={username} className="user-image" />
            </div>
            <div className="button-name-container">
              <button
                type="button"
                onClick={this.decreaseCounter}
                className="button"
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
              <p className="name">{username}</p>
              <button
                type="button"
                onClick={this.increaseCounter}
                className="button"
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                />
              </button>
            </div>
            <p className="company">{companyName}</p>
            <p className="review">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousal
