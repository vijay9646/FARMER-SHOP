async function fetchData() {
try {
const response = await fetch('json/fruits.json');
const data = await response.json();
return data;
} catch (error) {
console.error('Error fetching JSON data:', error);
}
}

function handleViewMoreClick(product) {
const apiUrl = 'https://api-generator.retool.com/dYmdE2/file';

const { image, name, price } = product;

fetch(apiUrl, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({ key: 'value', image, name, price }),
})
.then(response => {
if (!response.ok) {
  throw new Error('Error posting data to server');
}
return response.json();
})
.then(data => {
console.log('Data posted successfully:', data);
})
.catch(error => {
console.error('Error:', error);
});
}

function displayData(products) {
const productsContainer = document.getElementById('grid-container');
productsContainer.innerHTML = products.map(product => `
<div class="grid-item">
  <img src="${product.image}" alt="${product.name} Image">
  <h3>${product.name}</h3>
  <p>Price: $${product.price.toFixed(2)}</p>
  <a href="#" class="view-more" data-product='${JSON.stringify(product)}'>Add cart</a>
</div>
`).join('');

const viewMoreLinks = document.querySelectorAll('.view-more');
viewMoreLinks.forEach(link => {
link.addEventListener('click', function(event) {
  event.preventDefault();
  const productData = JSON.parse(this.getAttribute('data-product'));
  handleViewMoreClick(productData);
});
});
}

// async function search() {
// const searchTerm = document.getElementById('searchInput').value.toLowerCase();
// const data = await fetchData();

// const results = data.products.filter(item => item.name.toLowerCase().includes(searchTerm));
// displayData(results);

// const searchResults = document.getElementById('searchResults');
// searchResults.innerHTML = results.map(result => `<li>${result.name}</li>`).join('');
// searchResults.style.display = results.length > 0 ? 'block' : 'none';
// }

// document.addEventListener('DOMContentLoaded', async () => {
// const data = await fetchData();
// displayData(data.products);
// });

// // Attach an event listener to the search input
// document.getElementById('searchInput').addEventListener('input', search);


async function search(inputId, resultsId) {
  const searchTerm = document.getElementById(inputId).value.toLowerCase();
  const data = await fetchData();

  const results = data.products.filter(item => item.name.toLowerCase().includes(searchTerm));
  displayData(results);

  const searchResults = document.getElementById(resultsId);
  // searchResults.innerHTML = results.map(result => `<li>${result.name}</li>`).join('');
  searchResults.style.display = results.length > 0 ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchData();
  displayData(data.products);
});

// Attach an event listener to the first search input
document.getElementById('searchInput').addEventListener('input', () => {
  search('searchInput', 'searchResults');
});

// Attach an event listener to the second search input
document.getElementById('searchInput2').addEventListener('input', () => {
  search('searchInput2', 'searchResults2');
});
