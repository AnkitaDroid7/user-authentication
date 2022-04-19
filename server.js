const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();
dotenv.config();
app.use(cors())

const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const { PORT } = require('./config');

connectDB();

app.use(express.json());

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));