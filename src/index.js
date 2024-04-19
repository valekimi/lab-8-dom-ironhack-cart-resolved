// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = parseFloat(product.querySelector('.price span').textContent);
    const quantity = parseInt(product.querySelector('.quantity input').value);
    const subtotal = price * quantity;
    product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const subtotal = parseFloat(product.querySelector('.subtotal span').textContent);
    total += subtotal;
  });
  document.getElementById('total-value').textContent = `$${total.toFixed(2)}`;

}


  //===============================================
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


  //===============================================
// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = parseFloat(document.querySelector('.create-product input[type="number"]').value);
  
  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  tableBody.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

