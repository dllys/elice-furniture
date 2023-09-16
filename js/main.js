const allEl = document.querySelectorAll("a");
const logo = document.querySelectorAll(".logo");


allEl.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

const toLogin = document.getElementsByClassName("to-login")[0];

toLogin.addEventListener("click", () => {
    window.location.href = "../html/login.html";
})

logo.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("logologo")
        window.location.href = "../index.html";
    });
});


