const setDatabaseUrl = (env) => {
  if (env === 'production') {
    return process.env.PROD_DATABASE_URL;
  } else if (env === 'development') {
    return process.env.DEV_DATABASE_URL;
  } else {
    return process.env.TEST_DATABASE_URL;
  }
};

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: setDatabaseUrl(process.env.NODE_ENV),
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful-test',
  API_ENDPOINT: 'https://secure-bastion-12745.herokuapp.com'
  
};