const router = require("express").Router();
const { Post, User } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.userId,
        });

        res.status(200).json(newPost);
    }catch(err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deletedPost);
    }catch(err){
        res.status(400).json(err);
    }
})
module.exports = router;