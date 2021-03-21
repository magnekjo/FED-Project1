var jacket = {
  productName: "Product name",
  image: "/images/jackets/jacket3.jpg",
  size: "XL",
  color: "Blue",
  inCart: 0,
};

const addCart = document.querySelector(".add-cart");

if (addCart) {
  addCart.addEventListener("click", () => {
    cartNumbers(jacket);
    displayCart();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".nav-icons a span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  localStorage.setItem("cartNumbers", 1);
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".nav-icons a span").textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".nav-icons a span").textContent = 1;
  }
  setItems(product);
}

function setItems(jacket) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  if (cartItems != null) {
    cartItems[jacket.productName].inCart += 1;
  } else {
    jacket.inCart = 1;
    cartItems = {
      [jacket.productName]: jacket,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let productContainer = document.querySelector(".shop-item-container");

  if (!cartItems) {
    productContainer.innerHTML = "";
  } else {
    let numberJSON = localStorage.getItem("cartNumbers");
    let number = parseInt(numberJSON);

    for (i = 0; i < number; i++) {
      productContainer.innerHTML += `<div class="shop-item">
      <img src="/images/jackets/jacket3.jpg" />
      <span>Product name</span>
      <span>Colour</span>
      <span>Size</span>
      <span>Price</span>
      <button class="remove-btn">Remove</button>
    </div>`;
    }
  }
}
displayCart();

function remove() {
  const removeBtn = document.querySelectorAll(".remove-btn");
  const numberJSON = localStorage.getItem("cartNumbers");

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", () => {
      removeBtn[i].parentElement.remove();
      localStorage.setItem("cartNumbers", numberJSON - 1);
      reload = location.reload();
    });
  }
}
remove();

function checkout() {
  const complete = document.querySelector(".complete");
  const numberJSON = localStorage.getItem("cartNumbers");

  complete.addEventListener("click", () => {
    localStorage.setItem("cartNumbers", 0);
  });
}

checkout();
