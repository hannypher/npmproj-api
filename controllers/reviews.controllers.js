//import the model
const {Review, reviews} = require('../models/Reviews');

const fetchAllReviews = () => {
    return Review.fetchReviews();
}

const createReview = (review) => {
    return Review.addReview(review)
}

module.exports = {
    fetchAllReviews,
    createReview
}
