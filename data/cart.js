export let cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
    },
    {
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity :1
    }
];

 export function AddToCart(productId){
    let matchingItem;  
    cart.forEach((cartitem)=>{
        if(productId === cartitem.productId ){
            matchingItem =cartitem;
        }
    });
        if(matchingItem){
            matchingItem.quantity +=1;
        }
        else{
            cart.push({
                productId : productId,
                quantity :1
        } );
    }
}
 export function RemoveFromCart(productId){
    const newCart =[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId )
        newCart.push(cartItem);

    })
    cart =newCart;

}