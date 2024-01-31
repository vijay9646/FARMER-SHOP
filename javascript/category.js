// Function to create product elements based on the JSON data
function createProductElements(product) {
    var gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    var productLink = document.createElement("a");
    productLink.href = product.link;
    productLink.style.textDecoration = "none"; // Add this line to set text-decoration to none

    var productName = document.createElement("h2");
    productName.textContent = product.name;

    var productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    var productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDescription.style.color = "black"; // Add this line to set text-decoration to none

    productLink.appendChild(productImage);
    productLink.appendChild(productName);
    productLink.appendChild(productDescription);

    gridItem.appendChild(productLink);

    return gridItem;
}

// Function to append product elements to the specified container
function appendProductsToContainer(container, products) {
    products.forEach(function(product) {
        var productElement = createProductElements(product);
        container.appendChild(productElement);
    });
}

// Get the container element where the products will be appended
var productListContainer = document.getElementById("productList");

// Fetch JSON data and call the function to append product elements to the container
fetch('./json/category.json')
    .then(response => response.json())
    .then(data => appendProductsToContainer(productListContainer, data.products))
    .catch(error => console.error('Error fetching JSON:', error));
