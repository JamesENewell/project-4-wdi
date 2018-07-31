const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/codeshop-api-${env}`;
const secret = 'hellotheregeneralkenobi';

module.exports = { dbURI, port, secret };
