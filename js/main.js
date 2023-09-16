const allEl = document.querySelectorAll("a");

allEl.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

