const mongoose = require('mongoose');

// Get the URI from Mongodb website and add it to the ENV variables... we're just connecting to the cluster and using the package colors to get a prettier more useful message on the console after the connection is established
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MondoDB Connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the application with failure
  }
};

module.exports = connectDB;
