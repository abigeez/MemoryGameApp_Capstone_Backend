require ('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI);

mongoose.connection

.on('open',() => console.log('Connected to mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error));

module.exports = mongoose;