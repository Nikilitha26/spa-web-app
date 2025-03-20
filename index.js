import cors from 'cors';
import express from 'express';
import workshopRoutes from './routes/workshopRouter.js';

const app = express();

app.use(express.json()); 

// Configure CORS middleware
app.use(cors({
  origin: ['http://localhost:8080', 'https://spa-web-app.onrender.com'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'allowedHeaders'], 
}));

// Routes
app.use('/', workshopRoutes);
// app.use('/api', bookingRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


