
const config1 = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME.split(',')[0], // If you want to select the first database
  options: {
    instanceName: 'SQLEXPRESS',
    trustedServerCertificate: true,
    enableArithAbort: true,
    trustedConnection: false,
  },
  port: 1433, // Default port for SQL Server
};

module.exports = config1;
