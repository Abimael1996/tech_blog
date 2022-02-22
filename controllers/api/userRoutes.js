const router = require("express").Router();
const User = require("../../models");

router.post("/", async (req, res) => {
    try {
        const userData = User.create(req.body);

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;