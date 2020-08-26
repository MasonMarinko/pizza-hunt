const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
//add prefix of `/pizzas` to routs created un `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;