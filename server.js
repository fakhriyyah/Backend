import express from 'express';
import backendRoutes from './routes/backendRoutes.js';

const app = express();

console.log('Backend routes are being used');
app.use(backendRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
