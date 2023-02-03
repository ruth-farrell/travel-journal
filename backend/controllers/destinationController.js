const asyncHandler = require('express-async-handler')

const Destination = require('../models/destinationModel')


// @desc Get goals 
// @route GET /api/goals
// @access Private

const getDestinations = asyncHandler(async (req, res) => {
    const destinations = await Destination.find()
    res.status(200).json({destinations})
})

const setDestination = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set destinations'})
})

const updateDestination = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update destination ${req.params.id}`})
})


const deleteDestination = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete destination ${req.params.id}`})
})

module.exports = {
    getDestinations,
    setDestination,
    updateDestination,
    deleteDestination
}