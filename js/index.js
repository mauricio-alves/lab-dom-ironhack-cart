// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const multiply = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').innerText = multiply;
  return multiply;

  // version 2
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  const result = price * quantity;
  subtotal.innerText = result;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let result = 0;

  Array.from(products).forEach((product) => {
    result += updateSubtotal(product);
  });

  // version 2
  const products = document.querySelectorAll('.product');
  let result = 0;
  for (let i = 0; i <= products.length - 1; i++) {
    updateSubtotal(products[i]);
    result += Number(updateSubtotal(products[i]).innerText);
  }

  // ITERATION 3
  return (document.querySelector('#total-value span').innerText = result);

  // version 2
  const total = document.querySelector('#total-value span');
  total.innerText = result;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  calculateAll();

  // version 2
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  calculateAll();
}

// ITERATION 5
function createProduct() {
  // incompleto
  // const target = event.currentTarget;
  // const nameOfProduct = document.querySelector('.create-product input').value;
  // console.log(nameOfProduct);

  // version 2
  let productName = document.querySelectorAll('.create-product td input')[0];
  let productPrice = document.querySelectorAll('.create-product td input')[1];
  const newRow = document.querySelector('tbody');

  const tr = document.createElement('tr');
  tr.innerHTML = `        
  <tr>
  <td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
`;
  tr.classList.add('product');
  newRow.appendChild(tr);

  const removeBtn = tr.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  productName.value = '';
  productPrice.value = 0;

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeItensBtn = document.querySelectorAll('.btn-remove');
  Array.from(removeItensBtn).forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct);
  });

  // version 2
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i <= removeBtns.length - 1; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const creatingProductBtn = document.querySelector('#create');
  creatingProductBtn.addEventListener('click', createProduct);
});
