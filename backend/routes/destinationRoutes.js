const express = require('express')
const router = express.Router()
const { getDestinations, setDestination, updateDestination, deleteDestination } = require('../controllers/destinationController')

router.route('/').get(getDestinations).post(setDestination)

router.route('/:id').put(updateDestination).delete(deleteDestination)


module.exports = router 