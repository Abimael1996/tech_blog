const username = document.querySelector("#username");
const password = document.querySelector("#password");
const signUpBtn = document.querySelector("#signUpBtn");

console.log(signUpBtn);

const createNewUser = async (event) => {
    event.preventDefault();

    const newUser = {
        username: username.value,
        password: password.value
    }

    try {
        const response = await fetch("api/users", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(newUser)
        });
        if(response.ok) {
            window.location.replace("/")
        }
    } catch (err) {
        console.log(err);
    }
}

signUpBtn.addEventListener("click", createNewUser);