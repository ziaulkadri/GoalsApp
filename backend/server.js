const express = require('express');

const dotenv = require('dotenv').config();

const goalRoutes = require('./routes/goalsRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

// middleware for parsing the body

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
