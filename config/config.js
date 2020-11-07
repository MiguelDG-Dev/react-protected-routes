require('dotenv').config();

exports.MONGODB_URI = process.env.MONGODB;
exports.GOOGLE_CREDENTIALS = {
   clientID: process.env.GOOGLE_clientID,
   clientSecret: process.env.GOOGLE_clientSecret
}
