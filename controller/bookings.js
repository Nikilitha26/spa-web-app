const WorkshopModel = require('../model/bookingsDb.js');

exports.bookWorkshop = async (req, res) => {
  const { venue, date, workshopId } = req.body;

  try {
    await WorkshopModel.saveBooking(venue, date, workshopId);
    res.status(200).send('Workshop booked successfully!');
  } catch (error) {
    console.error('Error booking workshop:', error);
    res.status(500).send('Failed to book workshop.');
  }
};
