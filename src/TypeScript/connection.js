"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_string_1 = require("connection-string");
// import dynamic or environment-dependent settings:
const config = require("../config.json");
function getConnection(passwordHash) {
    const hosts = config.hosts.map(connection_string_1.ConnectionString.parseHost);
    const params = {
        connectTimeoutMS: 5000,
        replicaSet: 'myRepl',
        ssl: true
    };
    const cs = new connection_string_1.ConnectionString('mongodb:///my-db-name');
    cs.setDefaults({ user: config.user, password: config.password, hosts, params });
    return cs.toString({ passwordHash });
}
exports.getConnection = getConnection;
