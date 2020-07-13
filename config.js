
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL:
    process.env.DATABASE_URL || 'postgres://xfjdpkhukvtryr:51b4844e96d83acf953e36c740ad32e305b3922e9af7b051a4b86b235a4a6872@ec2-18-232-143-90.compute-1.amazonaws.com:5432/d8c2eea1cfjast',
};