import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/user.router.js';
// import userRoutes from './routes/user.routes.js'; // Make sure to import your routes correctly

const app = express();

// Enable CORS for your specific frontend origin
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true // Allow cookies or auth headers if needed
}));

// Built-in Express middleware to parse incoming JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your other middlewares and routes below...
app.use('/api/users', userRoutes);

export default app;