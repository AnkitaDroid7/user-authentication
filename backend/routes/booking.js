const express = require ('express');
const { createBooking, updateBooking, getBookings, getBookingImage } = require('../controllers/bookingControllers');
const { upload } = require('../utils/uploadFile');
const router = express.Router();

router.post('/', upload.single('image'), createBooking);
router.patch('/:id', updateBooking)
router.get('/', getBookings)
router.get('/:id', getBookingImage)

module.exports = router;
