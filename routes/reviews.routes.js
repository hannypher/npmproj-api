const router = require('express').Router()
const reviewControllers = require('../controllers/reviews.controllers');

// implement application routes / endpoints
router.get('/', (req, res) => {
    let reviews = reviewControllers.fetchAllReviews();
    return res.json({reviews})
});

router.post('/add', (req, res) => {
    let {fullName, message} = req.body;
    reviewControllers.createReview({fullName, message, pk:1 })
    return res.json({message: 'Review was added successfully'})
});

module.exports = router

