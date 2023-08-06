// Sample data for marketplace results
var marketplaceData = [
  {
    name: "Food",
    description: "This is the description for Food.",
    price: 29.99,
    link: "https://example.com/food"
  },
  {
    name: "Clothing",
    description: "This is the description for Clothing.",
    price: 49.99,
    link: "https://example.com/clothing"
  },
  {
    name: "Electronics",
    description: "This is the description for Electronics.",
    price: 19.99,
    link: "https://example.com/electronics"
  },
  {
    name: "Furniture",
    description: "This is the description for Furniture.",
    price: 99.99,
    link: "https://example.com/furniture"
  },
  // Add more products here
];

// Function to render marketplace results
function renderMarketplaceResults(results) {
  var resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    var noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "😊 Desculpa, não encontramos nenhum resultado";
    resultsContainer.appendChild(noResultsMessage);
    return;
  }

  results.forEach(function(result) {
    createResultItem(result);
  });

  function createResultItem(result) {
    var resultItem = document.createElement("div");
    resultItem.className = "result-item";

    var title = document.createElement("a");
    title.href = result.link;
    title.textContent = result.name;
    resultItem.appendChild(title);

    var description = document.createElement("p");
    description.textContent = result.description;
    resultItem.appendChild(description);

    var price = document.createElement("span");
    price.textContent = "Price: $" + result.price.toFixed(2);
    resultItem.appendChild(price);

    resultsContainer.appendChild(resultItem);
  }

  // Show the container after search is performed
  var container = document.querySelector(".container");
  container.style.display = "block";
}

// Function to handle search
function search() {
  var input = document.getElementById("searchInput").value.toLowerCase().trim();

  if (input === "") {
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    // Hide the container when search input is empty
    var container = document.querySelector(".container");
    container.style.display = "none";
    return;
  }

  var results = marketplaceData.filter(function(item) {
    return item.name.toLowerCase().includes(input) || item.description.toLowerCase().includes(input);
  });

  renderMarketplaceResults(results);

  // Show the container after search is performed
  var container = document.querySelector(".container");
  container.style.display = "block";
}

// Event listener for search button click
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", search);

// Event listener for "Enter" key press in the search input
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search();
  }
});
