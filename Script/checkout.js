import{cart ,RemoveFromCart} from '../data/cart.js';
import{products} from '../data/products.js';
let cartSummaryHTML='';
let totalAmount=0;
let shippingAmount=0;
let AmountWithOutTax=0;
function updateAmount(totalAmount){
   let Amount =totalAmount;

};

cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let macthingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            macthingProduct = product;
        }
       

    });
    totalAmount+= macthingProduct.priceCents*cartItem.quantity;
    shippingAmount = ((totalAmount)*.05);
    AmountWithOutTax = totalAmount+shippingAmount;
    

    
    
    cartSummaryHTML+=

    `
    <div class="cart-item-container 
    js-cart-item-container-${macthingProduct.id}">
    <div class="delivery-date">
      Delivery date: Wednesday, June 15
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${macthingProduct.image}">

    <div class="cart-item-details">
    <div class="product-name">
        ${macthingProduct.name}
    </div>
    <div class="product-price">
        $${(macthingProduct.priceCents/100).toFixed(2)}
    </div>
    <div class="product-quantity">
        <span>
        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
        Update
        </span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${macthingProduct.id}">
        Delete
        </span>
    </div>
    </div>

    <div class="delivery-options">
    <div class="delivery-options-title">
        Choose a delivery option:
    </div>

    <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-${macthingProduct.id}">
        <div>
        <div class="delivery-option-date">
            Tuesday, June 21
        </div>
        <div class="delivery-option-price">
            FREE Shipping
        </div>
        </div>
    </div>
    <div class="delivery-option">
        <input type="radio" checked class="delivery-option-input"
        name="delivery-option-${macthingProduct.id}">
        <div>
        <div class="delivery-option-date">
            Wednesday, June 15
        </div>
        <div class="delivery-option-price">
            $4.99 - Shipping
        </div>
        </div>
    </div>
    <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-2">
        <div>
        <div class="delivery-option-date">
            Monday, June 13
        </div>
        <div class="delivery-option-price">
            $9.99 - Shipping
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>

    `;
    


});
 document.querySelector('.order-summary').innerHTML =cartSummaryHTML;
 

 
 

 document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',() =>{
        const productId = link.dataset.productId;
        RemoveFromCart(productId);
        updateCartQuantity();
        
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        
        container.remove();
        updateAmount(totalAmount);

    });

 });
 let cartQuantity = 0;
function updateCartQuantity() {
  let cartQuantity = 0;
 

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});
document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} items`;

}
updateCartQuantity();




document.querySelectorAll('.place-order-button').forEach((button)=>{
    button.addEventListener('click',() =>{
        document.querySelector('.place-order-button').innerHTML='Order Placed';
    });
});

function paymentSummary(){
document.querySelector('.payment-summary').innerHTML=`
<div class="payment-summary-title">
  Order Summary
</div>

<div class="payment-summary-row">
  <div>Items (${cartQuantity}):</div>
  <div class="payment-summary-money">$${(totalAmount/100).toFixed(2)}</div>
</div>

<div class="payment-summary-row">
  <div>Shipping &amp; handling:</div>
  <div class="payment-summary-money">$${(shippingAmount/100).toFixed(2)}</div>
</div>

<div class="payment-summary-row subtotal-row">
  <div>Total before tax:</div>
  <div class="payment-summary-money">$${(AmountWithOutTax/100).toFixed(2)}</div>
</div>

<div class="payment-summary-row">
  <div>Estimated tax (10%):</div>
  <div class="payment-summary-money">$${((AmountWithOutTax*.1)/100).toFixed(2)}</div>
</div>

<div class="payment-summary-row total-row">
  <div>Order total:</div>
  <div class="payment-summary-money">$${(((AmountWithOutTax*.1)+(AmountWithOutTax))/100).toFixed(2)}</div>
</div>

<button class="place-order-button button-primary">
  Place your order
</button>

`;}
paymentSummary();














  
 
 

 