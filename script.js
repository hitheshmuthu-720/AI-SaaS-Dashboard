// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your message has been sent successfully!");

    contactForm.reset();

});


// FAQ Click Interaction

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const paragraph = item.querySelector("p");

        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
        } else {
            paragraph.style.display = "none";
        }

    });

});
// History Search

const historySearch = document.getElementById("historySearch");

if (historySearch) {

    historySearch.addEventListener("input", function() {

        const searchText = historySearch.value.toLowerCase();

        const historyCards =
            document.querySelectorAll(".history-card");

        historyCards.forEach(function(card) {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// History Copy and Delete

const historyCards = document.querySelectorAll(".history-card");

historyCards.forEach(function(card) {

    const buttons = card.querySelectorAll("button");

    const copyButton = buttons[0];
    const deleteButton = buttons[1];


    // Copy

    copyButton.addEventListener("click", function() {

        const text = card.querySelector("p").textContent;

        navigator.clipboard.writeText(text);

        alert("Copied to clipboard!");

    });


    // Delete

    deleteButton.addEventListener("click", function() {

        const confirmDelete =
            confirm("Delete this history item?");

        if (confirmDelete) {

            card.remove();

        }

    });

});
// Dark Mode

const darkMode = document.getElementById("darkMode");

if (darkMode) {

    darkMode.addEventListener("change", function() {

        if (darkMode.checked) {

            document.body.style.background = "#121212";
            document.body.style.color = "white";

        } else {

            document.body.style.background = "";
            document.body.style.color = "";

        }

    });

}
// Delete Account

const deleteAccount =
    document.getElementById("deleteAccount");

if (deleteAccount) {

    deleteAccount.addEventListener("click", function() {

        const confirmDelete =
            confirm(
                "Are you sure you want to delete your account?"
            );

        if (confirmDelete) {

            localStorage.removeItem("aihubUser");
            localStorage.removeItem("isLoggedIn");

            alert("Account deleted successfully!");

            window.location.href = "index.html";

        }

    });

}