import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../constants';

let verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.payload = payload;
            next();
        });
    } else if (req.originalUrl !== '/login') {
        res.sendStatus(401);
    } else {
        next();
    }
};

module.exports = verifyTokenMiddleware;
