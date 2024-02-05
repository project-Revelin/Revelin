const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in connection ${error}`)
    }
}
module.exports = connectdb;