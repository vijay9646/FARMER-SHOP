
// // Function to fetch JSON data
// async function fetchData() {
//   try {
//     const response = await fetch('three.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching JSON data:', error);
//   }
// }

// // Function to display data on the page
// function displayData(data) {
//   // Access data properties
//   const products = data.products;

//   // Display products data
//   const productsContainer = document.getElementById('products-container');
//   productsContainer.innerHTML = products.map(product => `
//       <div class="vijay">
//       <img src="${product.image}" alt="${product.name} Image">
//         <h3>${product.name}</h3>
//         <p>Price: $${product.price.toFixed(2)}</p>
//         <p>Description: ${product.description}</p>
//         <a href="./calculator.html">${product.id}</a>
//       </div>
//     `).join('');
// }

// // Call the functions
// fetchData().then(data => {
//   displayData(data);
// });

/*---------------------------------------------------------------------------------------------------------------- */

// // Function to fetch JSON data
// async function fetchData() {
//   try {
//     const response = await fetch('three.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching JSON data:', error);
//   }
// }

// // Function to handle the click event of "View More" links
// function handleViewMoreClick(product) {
//   // Change the API URL
//   const apiUrl = 'https://api-generator.retool.com/Cz0L8j/folder';

//   // Extract specific values
//   const { image, name, price } = product;

//   // Perform a POST request to the server with the selected values
//   fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ image, name, price }),
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error posting data to server');
//     }
//     // Handle the server response if needed
//     return response.json();
//   })
//   .then(data => {
//     // Handle the data from the server if needed
//     console.log('Data posted successfully:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }


// // Function to display data on the page
// function displayData(data) {
//   // Access data properties
//   const products = data.products;

//   // Display products data
//   const productsContainer = document.getElementById('products-container');
//   productsContainer.innerHTML = products.map(product => `
//       <div class="vijay">
//         <img src="${product.image}" alt="${product.name} Image">
//         <h3>${product.name}</h3>
//         <p>Price: $${product.price.toFixed(2)}</p>
//         <a href="#" class="view-more" data-product='${JSON.stringify(product)}'>View More</a>
//       </div>
//     `).join('');

//   // Add click event listener to "View More" links
//   const viewMoreLinks = document.querySelectorAll('.view-more');
//   viewMoreLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const productData = JSON.parse(this.getAttribute('data-product'));
//       // Call a function to handle the POST request with selected values
//       handleViewMoreClick(productData);
//     });
//   });
// }

// // Call the functions
// fetchData().then(data => {
//   displayData(data);
// });

/*---------------------------------------------------------------------------------------------------------------- */

// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('json/fruits.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

// Function to handle the click event of "View More" links
function handleViewMoreClick(product) {
  // Change the API URL
  const apiUrl = 'https://api-generator.retool.com/dYmdE2/file'; // Updated API URL

  // Extract specific values
  const { image, name, price } = product;

  // Perform a POST request to the server with the selected values
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value', image, name, price }), // Add other necessary fields
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error posting data to server');
    }
    // Handle the server response if needed
    return response.json();
  })
  .then(data => {
    // Handle the data from the server if needed
    console.log('Data posted successfully:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Function to display data on the page
function displayData(data) {
  // Access data properties
  const products = data.products;

  // Display products data
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = products.map(product => `
      <div class="vijay">
        <img src="${product.image}" alt="${product.name} Image">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <a href="#" class="view-more" data-product='${JSON.stringify(product)}'>Add cart</a>
      </div>
    `).join('');

  // Add click event listener to "View More" links
  const viewMoreLinks = document.querySelectorAll('.view-more');
  viewMoreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const productData = JSON.parse(this.getAttribute('data-product'));
      // Call a function to handle the POST request with selected values
      handleViewMoreClick(productData);
    });
  });
}

// Call the functions
fetchData().then(data => {
  displayData(data);
});
// 

/*-------------------------------------------------------------------------------------- */
//the last serach bar inthe script file
/* 
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
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = products.map(product => `
    <div class="vijay">
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

async function search() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const data = await fetchData();

  const results = data.products.filter(item => item.name.toLowerCase().includes(searchTerm));
  displayData(results);

  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = results.map(result => `<li>${result.name}</li>`).join('');
  searchResults.style.display = results.length > 0 ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchData();
  displayData(data.products);
});

// Attach an event listener to the search input
document.getElementById('searchInput').addEventListener('input', search);


*/