import {AUTH_USER, USERNAME, PASSWORD, ACCESS_TOKEN_SECRET} from "../constants";
import router from "./defaultRouter";
import jwt from "jsonwebtoken";

router.post('/', (req, res) => {
    if (!AUTH_USER) {
        const msg = {
            error: {
                code: 501,
                message: "You cannot login as authentication has not been enabled."
            }
        };

        res.status(501).send(msg);
    }

    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
        const accessToken = jwt.sign({ authenticated: true }, ACCESS_TOKEN_SECRET);

        res.json({
            accessToken
        });
    } else {
        res.sendStatus(403);
    }
});

export default router;