const { Pool } = require("pg");
const pool = new Pool({
 host: "qa-db20181111020327926500000001.czm9f5zcdrel.us-east-1.rds.amazonaws.com",

 user: "postgres",

 database: "ion_spark",

 password: "RCUIVPA4QCvbt8pSYEP",

 max: 20,

});

module.exports = pool ;