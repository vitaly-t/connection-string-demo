import {ConnectionString} from 'connection-string';

// import dynamic or environment-dependent settings:
import * as config from '../config.json';

/**
 * Generates and returns a connection string.
 *
 * @param [passwordHash]
 * Secures the password when connection string is for logging.
 */
export function getConnection(passwordHash?: boolean | string): string {
    const hosts = config.hosts.map(ConnectionString.parseHost); // parsing hosts

    // some static options, as supported by the driver:
    const params = {
        connectTimeoutMS: 5000,
        replicaSet: 'myRepl',
        ssl: true
    };

    const cs = new ConnectionString('mongodb:///static-db-name');
    cs.setDefaults({user: config.user, password: config.password, hosts, params});

    return cs.toString({passwordHash});
}
