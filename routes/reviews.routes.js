const router = require('express').Router()
const reviewControllers = require('../controllers/reviews.controllers');

// implement application routes / endpoints
router.get('/', async (req, res) => {
    let reviews = await reviewControllers.fetchAllReviews();
    // console.log(reviews, '****');
    return res.json({reviews})
});

router.post('/add', (req, res) => {
    let {fullName, message} = req.body;
    reviewControllers.createReview({fullName, message })
    return res.json({message: 'Review was added successfully'})
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    let data = reviewControllers.fetchReview(id);
    return res.json({ data }); 
});

router.put('/:id/update', (req, res) => {
    const {id} = req.params;
    const {message} = req.body;
    let updated = reviewControllers.updateReview(id, message)
    return res.json({data: updated})
});

router.delete('/:id/delete', (req, res) => {
    const {id} = req.params;
    response = reviewControllers.deleteReview(id)
    return res.json({data: response})
});

module.exports = router

