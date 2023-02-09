const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();
const path = require('path');
const goalRoutes = require('./routes/goalsRoutes');
const userRoutes = require('./routes/userRoutes');

const { errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middleware for parsing the body

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve frontend

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(
			path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
		)
	);
} else {
	app.get('/', (req, res) => res.send('please set to production...'));
}

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
