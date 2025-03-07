let currentPage = 1;

function foldPage(page) {
    document.getElementById("page" + page).classList.add("folded");
    currentPage++;
    document.getElementById("page" + currentPage).classList.remove("folded");
}

function restartCard() {
    for (let i = 2; i <= 4; i++) {
        document.getElementById("page" + i).classList.add("folded");
    }
    document.getElementById("page1").classList.remove("folded");
    currentPage = 1;
}