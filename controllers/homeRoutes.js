const router = require('express').Router();
const { Post, User } = require("../models");

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

router.get("/dashboard", async (req, res) => {
    try {
        const postsData = await Post.findAll({
            where: {
                user_id: req.session.userId,
            },
            include: [
                {
                    model: User,
                    attributes: ["username"]
                }
            ]
        });
        const posts = postsData.map((post) => post.get({plain: true}));
        console.log(posts);
        res.render("dashboard", {posts, loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router;
