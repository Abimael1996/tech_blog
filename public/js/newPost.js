const newPostBtn = document.querySelector("#newPostBtn");
const posts = document.querySelectorAll(".posts");

const removePosts = () => {
    for (const post of posts) {
        post.remove();
    }
}

const deleteRequest = (deletePostBtn, postId) => {
    deletePostBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const result = await fetch(`/api/posts/${postId}`, {
            method: "DELETE",
        });
        if(result.ok){
            window.location.reload();
        }else{
            alert("Something went wrong");
        }
    })
}

const editPostForm = (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("id"));
    newPostBtn.remove();
    removePosts();
    createPost("Edit Post", "Update Post");
    const form = document.querySelector("form");
    const deletePostBtn = document.createElement("button");
    deletePostBtn.setAttribute("type", "submit");
    deletePostBtn.setAttribute("id", "deletePost");
    deletePostBtn.textContent = "Delete";
    form.appendChild(deletePostBtn);
    const postId = e.target.getAttribute("id");
    deleteRequest(deletePostBtn, postId);
}

for (const post of posts) {
    post.addEventListener("click", editPostForm)
}

const createPost = (header, btnText) => {
    const mainEl = document.querySelector("main");
    const sectionEl = document.createElement("section");
    const h2El = document.createElement("h2");
    h2El.textContent = header;
    sectionEl.setAttribute("class", "form-box");
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "form-content");
    const formEl = document.createElement("form");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    const contentLabel = document.createElement("label");
    contentLabel.setAttribute("for", "content");
    contentLabel.textContent = "Content";
    const contentInput = document.createElement("textarea");
    contentInput.setAttribute("id", "content");
    contentInput.setAttribute("name", "content");
    const submitPostBtn = document.createElement("button");
    submitPostBtn.setAttribute("type", "submit");
    submitPostBtn.setAttribute("id", "submitPost");
    submitPostBtn.textContent = btnText;

    mainEl.prepend(sectionEl);
    sectionEl.appendChild(h2El);
    sectionEl.appendChild(divEl);
    divEl.appendChild(formEl);
    formEl.appendChild(titleLabel);
    formEl.appendChild(titleInput);
    formEl.appendChild(contentLabel);
    formEl.appendChild(contentInput);
    formEl.appendChild(submitPostBtn);
}

const fetchPost = (submitPostBtn, titleInput, contentInput) => {
    submitPostBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const newPost = {
            title: titleInput.value,
            content: contentInput.value,
        };

        const response = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "Application/JSON" },
            body: JSON.stringify(newPost)
        });
        if (response.ok) {
            window.location.reload();
        } else {
            alert("Something went wrong");
        }
    });
}

const createPostForm = () => {
    newPostBtn.remove();
    removePosts();
    createPost("Create New Post", "Create");
    const submitPostBtn = document.querySelector("#submitPost");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    fetchPost(submitPostBtn, titleInput, contentInput);
}

newPostBtn.addEventListener("click", createPostForm)
