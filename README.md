express-session
NPM Version NPM Downloads Build Status Test Coverage

Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

$ npm install express-session
API
var session = require('express-session')
session(options)
Create a session middleware with the given options.

Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

Note Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work. This module now directly reads and writes cookies on req/res. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.

Warning The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.

For a list of stores, see compatible session stores.
