const pg = require("pg")

const config = {
    user: "postgres",
    database: "iG-Gallary",
    password: "Jakaza@p1017.",
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("connected to the Database");
});

pool.on("remove", () => {
    console.log("client removed");
    process.exit(0);
});

module.exports = {
    pool
};
