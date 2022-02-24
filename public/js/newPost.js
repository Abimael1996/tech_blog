const newPostBtn = document.querySelector("#newPostBtn");

const createPostForm = () => {
    newPostBtn.remove();
    const mainEl = document.querySelector("main");
    const sectionEl = document.createElement("section");
    const h2El = document.createElement("h2");
    h2El.textContent = "Create New Post";
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
    submitPostBtn.textContent = "Create";

    mainEl.prepend(sectionEl);
    sectionEl.appendChild(h2El);
    sectionEl.appendChild(divEl);
    divEl.appendChild(formEl);
    formEl.appendChild(titleLabel);
    formEl.appendChild(titleInput);
    formEl.appendChild(contentLabel);
    formEl.appendChild(contentInput);
    formEl.appendChild(submitPostBtn);

    submitPostBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const newPost = {
            title: titleInput.value,
            content: contentInput.value,
        };

        const response = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "Application/JSON"},
            body: JSON.stringify(newPost)
        });
        if(response.ok) {
            window.location.reload();
        }else {
            alert("Something went wrong");
        }
    });
}

newPostBtn.addEventListener("click", createPostForm)
