
const failRequestMiddleware = (req, res, next) => {
    if (req.body.fail === true) {
        const msg = {
            error: {
                code: 400,
                message: "I have denied your request, as you asked me to."
            }
        };

        res.status(400).send(JSON.stringify(msg));
    } else {
        next();
    }
}

module.exports = failRequestMiddleware;