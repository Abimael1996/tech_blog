const router = require('express').Router();

router.get("/", async (req, res) => {
    try {
        res.render("homepage", { loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.render("login", { loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/signup", async (req, res) => {
    try {
        res.render("signup", { loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;
