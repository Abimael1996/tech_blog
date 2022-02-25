const submitComment = document.querySelector("#commentBtn");
const comment = document.querySelector("#comment");
const postComment = async (event) => {
    event.preventDefault();
    const post_id = submitComment.getAttribute("data-post");
    const newComment = {
        content: comment.value,
        post_id,
    }
    console.log(newComment);
    const response = await fetch("../../api/comments", {
        method: "POST",
        headers: {"Content-Type": "Application/JSON"},
        body: JSON.stringify(newComment),
    });

}

submitComment.addEventListener("click", postComment);