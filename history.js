// Load AI History

const historyList = document.getElementById("historyList");

const history =
    JSON.parse(localStorage.getItem("aihubHistory")) || [];

if (history.length === 0) {

    historyList.innerHTML =
        "<p>No AI generations yet.</p>";

} else {

    history.forEach(function(item, index) {

        const card = document.createElement("div");

        card.className = "history-card";

        card.innerHTML = `
            <div>
                <h3>${item.tool}</h3>

                <p>${item.input}</p>

                <small>${item.date}</small>
            </div>

            <div class="history-actions">

                <button onclick="copyHistory(${index})">
                    Copy
                </button>

                <button onclick="deleteHistory(${index})">
                    Delete
                </button>

            </div>
        `;

        historyList.appendChild(card);

    });
}


// Copy History

function copyHistory(index) {

    const history =
        JSON.parse(localStorage.getItem("aihubHistory")) || [];

    navigator.clipboard.writeText(history[index].result);

    alert("Result copied!");

}


// Delete History

function deleteHistory(index) {

    const history =
        JSON.parse(localStorage.getItem("aihubHistory")) || [];

    history.splice(index, 1);

    localStorage.setItem(
        "aihubHistory",
        JSON.stringify(history)
    );

    location.reload();

}
// History Search

const historySearch =
    document.getElementById("historySearch");

if (historySearch) {
    historySearch.addEventListener("input", function() {

        const searchText =
            historySearch.value.toLowerCase();

        const historyCards =
            document.querySelectorAll(".history-card");

        historyCards.forEach(function(card) {

            const cardText =
                card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });
    });
}