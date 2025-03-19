// workshopsController.js
import { getWorkshopsDb, bookWorkshopDb } from '../model/workshopDb.js';

// Fetch workshops with dates and seat availability
const fetchWorkshops = async (req, res) => {
  try {
    const workshops = await getWorkshopsDb();
    res.status(200).json(workshops);
  } catch (error) {
    console.error('Error fetching workshops:', error);
    res.status(500).json({ error: 'Failed to fetch workshops.' });
  }
};

// Handle booking a workshop date
const bookWorkshopDate = async (req, res) => {
  const { dateId } = req.body;

  if (!dateId) {
    return res.status(400).json({ error: 'Date ID is required.' });
  }

  try {
    const success = await bookWorkshopDb(dateId);
    if (success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: 'Booking failed. No seats available or invalid date.' });
    }
  } catch (error) {
    console.error('Error booking workshop:', error);
    res.status(500).json({ error: 'Failed to book workshop.' });
  }
};

export { fetchWorkshops, bookWorkshopDate };

