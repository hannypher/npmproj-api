const reviews = []; //temporary database/ store

class Review {
    constructor() {}; //only add params if you intend to initialize with data
    static fetchReviews (){
        return reviews.length ? reviews: "No reviews have been added";
    };
    static addReview (review) {
        return reviews.push(review);
    }
};

module.exports = {
    Review,
    reviews
}
