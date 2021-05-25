let reviews = []; //temporary database/ store

class Review {
    constructor() {
        this.name = 'name'
    }; //only add params if you intend to initialize with data
    static fetchReviews (){
        return reviews.length ? reviews: 'No reviews have been added';
    };
    static addReview (review) {
        return reviews.push(review);
    };
    static getSingleReview(id) {
        let review;

        if (reviews.length) {
            review = reviews.find(review => review.pk == id);
        }

        if(Object.keys(reviews).length) {
            return {review}
        }
        return {message: 'Review not found'};
    }

    static updateReview(id, data) {
        //find the item
        let review;
        if (reviews.length) {
            
        } else {
            return {message: "No reviews to update"}
        }
        //make changes
        if(review) {
            let updatedReview = {...review, message: data}
            let position = reviews.findIndex(review =>review.pk == id);
            reviews[position] = updatedReview;
            return {review : reviews[position]}
        } else {
            return {message: 'Review not found'}
        }
        //save the change
    }

    static removeReview(id) {
        let review;
        if (reviews.length) {
            review = reviews.find(review => review.pk == id);
            if(!review) {
            return {message: 'review does not exist'}
        } else {
            reviews = reviews.filter(review => review.pk !== id);
            return {message: 'Review removed successfully'}
            }
        } else {
            return {message: "No reviews to delete"}
        }
    }
};

module.exports = {
    Review,
    reviews
}
