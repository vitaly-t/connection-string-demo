# connection-string-demo

It shows proper way of handling connection strings in a complex and secure environment, using [connection-string] library.

The demo offers two identical implementations:

 * [JavaScript implementation](./src/JavaScript)
 * [TypeScript implementation](./src/TypeScript)

It generates a connection string for [mongodb], as a good example of handling multi-host connections. 

### Demo Explanation

When working with connections, you typically have part of the connection that's static, and part that's dynamic.

For the sake of an example, in this demo we make the following assumptions, and then implement them:

* You have an external/dynamic (or environment-dependent) list of hosts, plus user name and password.
* You know the driver/provider name, plus your database name is static.
* You want to use all connection options statically.  

In your application the situation can be quite different, and even completely the other way round.
But this demo shows you how to approach this, so you can figure out how to change this to fit your application's needs. 

[connection-string]:https://github.com/vitaly-t/connection-string
[mongodb]:https://github.com/mongodb/mongo
