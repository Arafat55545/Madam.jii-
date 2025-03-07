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
}function createFloatingItems() {
    for (let i = 0; i < 10; i++) {
        let item = document.createElement("div");
        item.className = "floating-item";
        item.innerHTML = ["💖", "✨", "💫", "🎈"][Math.floor(Math.random() * 4)];
        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(item);

        setTimeout(() => item.remove(), 5000);
    }
}

setInterval(createFloatingItems, 1000);
