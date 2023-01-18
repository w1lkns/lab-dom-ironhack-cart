// ITERATION 1
const productAll = document.getElementsByClassName('product');
const products = [...productAll];

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span')
  let subtotalFinal = price.innerHTML * quantity.value;

  subtotal.innerHTML = subtotalFinal

  return subtotalFinal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  products.forEach((product) => {
    updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  let total = 0;
  products.forEach((product) => {
    total += Number(product.querySelector('.subtotal span').textContent);
  });

  document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const body = document.querySelector('tbody')
  body.removeChild(target.parentNode.parentNode)
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const buttonRemove = document.querySelectorAll('.btn-remove');
  buttonRemove.forEach((button) => button.addEventListener('click', removeProduct));
});
