import {collections} from '../data/data';

const collectionMiddleware = (req, res, next) => {
    if (req.url === "/login") {
        next();
        return false;
    }

    let match = req.url.match(/\/v1\/([a-z]+)(\/)?(\d+)?/);

    if (match && collections.includes(match[1])) {
        next();
    } else {
        const msg = {
            error: {
                code: 400,
                message: "The requested collection does not exist."
            }
        };

        res.status(400).send(msg);
    }
}

module.exports = collectionMiddleware;