// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const multiply = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').innerText = multiply;
  return multiply;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let result = 0;

  Array.from(products).forEach((product) => {
    result += updateSubtotal(product);
  });

  // ITERATION 3
  return (document.querySelector('#total-value span').innerText = result);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove();

  calculateAll();
}

// ITERATION 5
function createProduct() {
  // const target = event.currentTarget;
  // const nameOfProduct = document.querySelector('.create-product input').value;
  // console.log(nameOfProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeItensBtn = document.querySelectorAll('.btn-remove');
  Array.from(removeItensBtn).forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct);
  });

  const creatingProductBtn = document.querySelector('#create');
  creatingProductBtn.addEventListener('click', createProduct);
});
