import express from 'express';
import { fetchWorkshops, bookWorkshopDate } from '../controller/workshop.js';

const router = express.Router();

// Route for fetching workshops
router.get('/', fetchWorkshops);

// Route for booking a workshop
router.post('/book', bookWorkshopDate);

export default router;
