import cors from 'cors';
import express from 'express';
import workshopRoutes from './routes/workshopRouter.js';
// import bookingRoutes from './routes/bookingRoutes.js';

const app = express();


app.use(express.json());  // To parse JSON bodies
app.use(cors({
  origin: ['http://localhost:8080', 'https://spa-web-app.onrender.com/'],
  credentials: true,
  headers: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}));

// Routes
app.use('/workshops', workshopRoutes);
// app.use('/api', bookingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

