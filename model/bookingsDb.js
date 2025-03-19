const db = require('../config/db'); // Import your MySQL connection setup

exports.saveBooking = (venue, date, workshopId) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO bookings (venue, date, workshop_id) VALUES (?, ?, ?)';
    db.query(query, [venue, date, workshopId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
