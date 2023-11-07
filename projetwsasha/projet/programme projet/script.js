const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");
searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
function performSearch() {
    const searchTerm = searchInput.value.trim();
    contentContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            const resultElement = document.createElement("p");
            resultElement.textContent = data[i];
            contentContainer.appendChild(resultElement);
        }
    }
}