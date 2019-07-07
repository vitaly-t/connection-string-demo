const ConnectionString = require('connection-string');

// import dynamic or environment-dependent settings:
const config = require('../config.json');

/**
 * Generates and returns a connection string.
 *
 * @param [passwordHash]
 * Secures the password when connection string is for logging.
 */
function getConnection(passwordHash) {
    const hosts = config.hosts.map(ConnectionString.parseHost); // parsing hosts

    // some options, as supported by the driver:
    const params = {
        connectTimeoutMS: 5000,
        replicaSet: 'myRepl',
        ssl: true
    };

    const cs = new ConnectionString('mongodb:///my-db-name');
    cs.setDefaults({user: config.user, password: config.password, hosts, params});

    return cs.toString({passwordHash});
}

module.exports = {
    getConnection
};
