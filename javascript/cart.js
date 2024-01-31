const localUrl = 'json/all.json';
const newApiUrl = 'https://api-generator.retool.com/dYmdE2/file';

const productListTable = document.getElementById('productList');

function fetchLocalData() {
    return fetch(localUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Local HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

async function fetchApiData() {
    try {
        const response = await fetch(newApiUrl);
        if (!response.ok) {
            throw new Error(`API HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Error fetching API data: ${error.message}`);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        const row = productListTable.insertRow();
        const productCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const quantityCell = row.insertCell(3);
        const totalCell = row.insertCell(4);
        const actionCell = row.insertCell(5);

        productCell.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-image">`;
        nameCell.textContent = product.name;
        priceCell.textContent = `₹${product.price.toFixed(2)}`;

        const quantityDiv = document.createElement('div');
        quantityDiv.innerHTML = `
  <button onclick="decrementQuantity(this)" id="degrebut">-</button>
  <input type="number" value="1" min="1" max="5" onchange="updateTotal(this)" id="quaninput">
  <label for="quantity">KG</label>
  <button onclick="incrementQuantity(this)" id="increbut">+</button>
`;
        quantityCell.appendChild(quantityDiv);

        const initialTotal = product.price * 1; // Initial total is based on quantity 1
        totalCell.textContent = `₹${initialTotal.toFixed(2)}`;

        actionCell.innerHTML = '<button onclick="deleteRow(this)" id="actionbut">X</button>';
    });
}

function updateTotalValue() {
    const totalValueElement = document.getElementById('totalValue');
    const rows = document.getElementById('productList').getElementsByTagName('tr');
    let total = 0;

    for (let i = 0; i < rows.length; i++) {
        const totalCell = rows[i].getElementsByTagName('td')[4];
        if (totalCell) {
            total += parseFloat(totalCell.textContent.replace('₹', ''));
        }
    }

    totalValueElement.textContent = `Total: ₹${total.toFixed(2)}`;
}

function updateTotal(input) {
    const priceElement = input.parentNode.parentNode.previousElementSibling;
    const totalElement = input.parentNode.parentNode.nextElementSibling;

    const price = parseFloat(priceElement.textContent.replace('₹', ''));
    const quantity = parseInt(input.value);

    const total = price * quantity;

    totalElement.textContent = `₹${total.toFixed(2)}`;

    updateTotalValue();
}

function incrementQuantity(button) {
    const input = button.parentNode.parentNode.querySelector('input');
    const currentValue = parseInt(input.value);

    if (currentValue < 5) {
        input.value = currentValue + 1;
        updateTotal(input);
    }
}

function decrementQuantity(button) {
    const input = button.parentNode.parentNode.querySelector('input');
    const currentValue = parseInt(input.value);

    if (currentValue > 1) {
        input.value = currentValue - 1;
        updateTotal(input);
    }
}

async function deleteRow(button) {
    try {
        const row = button.parentNode.parentNode;
        const productName = row.cells[1].textContent;

        const apiUrl = 'https://api-generator.retool.com/dYmdE2/file';
        const apiData = await fetch(apiUrl).then(response => response.json());

        const matchingProductIndex = apiData.findIndex(apiProduct => apiProduct.name === productName);

        if (matchingProductIndex === -1) {
            console.error('Product not found in API database.');
            return;
        }

        const deleteResponse = await fetch(`${apiUrl}/${apiData[matchingProductIndex].id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!deleteResponse.ok) {
            throw new Error(`API DELETE error! Status: ${deleteResponse.status}`);
        }

        row.parentNode.removeChild(row);
        updateTotalValue();
    } catch (error) {
        console.error('Error deleting row:', error.message);
    }
}

/*-----------------------------------------------------------*/

/*table last two button */

function openPaymentPage(pageUrl, position) {
    const newWindow = window.open(pageUrl, '_blank');

    if (position === 'left') {
        newWindow.moveTo(0, window.innerHeight - newWindow.outerHeight);
    } else if (position === 'right') {
        newWindow.moveTo(window.innerWidth - newWindow.outerWidth, window.innerHeight - newWindow.outerHeight);
    }
}

/*-----------------------------------------------------------*/


async function fetchDataAndDisplay() {
    try {
        const [localData, apiData] = await Promise.all([fetchLocalData(), fetchApiData()]);

        const combinedData = localData.products.filter(localProduct => {
            const matchingApiProduct = apiData.find(apiProduct => apiProduct.name === localProduct.name);
            return matchingApiProduct !== undefined;
        });

        displayProducts(combinedData);
        updateTotalValue();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchDataAndDisplay();
