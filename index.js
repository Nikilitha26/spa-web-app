// server.js
import express from 'express';
import workshopRoutes from './routes/workshopRouter.js';
// import bookingRoutes from './routes/bookingRoutes.js';

const app = express();


app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/workshops', workshopRoutes);
// app.use('/api', bookingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

