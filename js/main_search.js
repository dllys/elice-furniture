const searchEl = document.querySelector(".icon_search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("blur", () => {
    searchInputEl.value = "";
})