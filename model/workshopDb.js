// workshops.js
import { pool } from "../config/config.js";

// Fetch all workshops along with their dates and seat availability
const getWorkshopsDb = async () => {
  const query = `
    SELECT w.workshop_id, w.venue, wd.date_id, wd.date, wd.seats_available
    FROM workshops w
    JOIN workshop_dates wd ON w.workshop_id = wd.workshop_id
  `;
  let [data] = await pool.query(query);

  // Group workshops by their IDs
  const groupedWorkshops = data.reduce((result, workshop) => {
    const found = result.find((w) => w.workshop_id === workshop.workshop_id);

    if (found) {
      found.dates.push({
        date_id: workshop.date_id,
        date: workshop.date,
        seatsAvailable: workshop.seats_available,
      });
    } else {
      result.push({
        workshop_id: workshop.workshop_id,
        venue: workshop.venue,
        dates: [
          {
            date_id: workshop.date_id,
            date: workshop.date,
            seatsAvailable: workshop.seats_available,
          },
        ],
      });
    }
    return result;
  }, []);

  return groupedWorkshops;
};

// Book a workshop date if seats are available
const bookWorkshopDb = async (dateId) => {
  // Check if the seats are available for the given date
  let [[dateRecord]] = await pool.query(
    'SELECT seats_available FROM workshop_dates WHERE date_id = ?',
    [dateId]
  );

  if (dateRecord && dateRecord.seats_available > 0) {
    // Deduct a seat
    await pool.query(
      'UPDATE workshop_dates SET seats_available = seats_available - 1 WHERE date_id = ?',
      [dateId]
    );

    // Get the date information
    let [[dateInfo]] = await pool.query(
      'SELECT date FROM workshop_dates WHERE date_id = ?',
      [dateId]
    );

    // Insert the booking record
    await pool.query(
      'INSERT INTO bookings (date_id, booked_date) VALUES (?, ?)',
      [dateId, dateInfo.date]
    );

    return true;
  }
  return false;
};

export { getWorkshopsDb, bookWorkshopDb };
