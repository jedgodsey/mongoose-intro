const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/test';

// Connecto to MongoDB (local)
// first arg is the connection string
// second arg is the config object
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected.')
})
mongoose.connection.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`)
})


module.exports = {
    Article: require('./Article')
}
