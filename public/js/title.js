const title = document.querySelector("h1");

if(window.location.pathname === "/dashboard") {
    title.textContent = "Your Dashboard"
}else {
    title.textContent = "The Tech Blog"
}