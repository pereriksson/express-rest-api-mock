"use strict";

import {EXPRESS_LISTEN_PORT, AUTH_USER, ACCEPTED_CONTENT_TYPES, NAMESPACE} from "./src/constants";
import defaultRouter from './src/routers/defaultRouter';
import loginRouter from "./src/routers/loginRouter";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const failRequestMiddleware = require('./src/middleware/failRequestMiddleware');
const verifyTokenMiddleware = require('./src/middleware/verifyTokenMiddleware');
const contentTypeMiddleware = require('./src/middleware/contentTypeMiddleware');
const collectionMiddleware = require('./src/middleware/collectionMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: req => ACCEPTED_CONTENT_TYPES.includes(req.headers['content-type']) }));
app.use(failRequestMiddleware);
app.use(contentTypeMiddleware);
app.use(collectionMiddleware);

if (AUTH_USER) {
    app.use(verifyTokenMiddleware);
}

app.use('/'+NAMESPACE, defaultRouter);
app.use('/login', loginRouter);

app.listen(EXPRESS_LISTEN_PORT, () => {
    console.log(`Mock REST API listening at http://localhost:${EXPRESS_LISTEN_PORT}`)
});

