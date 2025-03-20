import express from 'express';
import { fetchWorkshops } from '../controller/workshop.js';

const router = express.Router();

// Define the route for fetching workshops
router.get('/', fetchWorkshops);

export default router;

