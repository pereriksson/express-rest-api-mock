import {RESPONSE_DELAY} from "../constants";

const delayResponseMiddleware = (req, res, next) => {
    if (RESPONSE_DELAY) {
        setTimeout(next, RESPONSE_DELAY);
    }
}

exports.default = delayResponseMiddleware;