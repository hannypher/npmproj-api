//import the model
const {Review, reviews} = require('../models/Reviews');
const ReviewModel = require('../models/review.model')

const fetchAllReviews = () => {
   // const rev = new ReviewModel()
    // return Review.fetchReviews();
   // return ReviewModel.find();
   return ReviewModel.find().then(data => {
       return {data}

    }).catch(err => {
       throw new Error(err)}
       ); 

}

const createReview = (review) => {
    let pk = reviews.length ? reviews.length +1 : 1;
    review = {...review, pk}
    return Review.addReview(review)
}

const fetchReview = (id) => {
    return Review.getSingleReview(id);
}

const updateReview = (id, data) => {
    return Review.updateReview(id, data)
}

const deleteReview = id => {
    return Review.removeReview(id);
}

module.exports = {
    fetchAllReviews,
    createReview,
    fetchReview,
    updateReview,
    deleteReview
}
