import {RESPONSE_DELAY} from "../constants";

const delayResponseMiddleware = (req, res, next) => {
    setTimeout(next, RESPONSE_DELAY);
}

module.exports = delayResponseMiddleware;