// ShoppingCart.jsx
import { useState } from 'react';

const ShoppingCart = () => {
  // Initialize state with an empty array for products
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');


  const addCart = () => {
    if (productName.trim() !== '' && productPrice.trim() !== '') {

      const newProduct = {
        id: Date.now(), // Unique ID for the product
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1
        
      };
      
      
      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
      
      
    } 
     
  };

  const decreaseQuantity = (id) => {
    const updateProducts = products.map((product) => 
    product.id === id ? {
      ...product, quantity: product.quantity - 1}
      :product
    )
    setProducts(updateProducts)
  }

  
  const increaseQuantity = (id) =>{
    const updadateProducts = products.map((product) =>
      product.id === id ? {...product, quantity: product.quantity + 1}
    : product
  )
  setProducts(updadateProducts)
  }

 const removeProduct = (id) =>{
  const updateRemove= products.filter((product) =>
  product.id !== id
)
setProducts(updateRemove)
  
 } 

 const totalPrice= products.reduce(
  (total, product) => total + product.price * product.quantity, 0
 )

      
  // Function to handle adding a new product
  return (
      <>
        <h2>Shopping Cart</h2>
        <h3>Add a Product </h3>
        <div>
          <input 
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input 
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button onClick={addCart}>Add to Cart</button>
        </div>
        {products.length > 0 ? (
          <div>
            <h3>Cart Items</h3>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price.toFixed(2)} x
                  <div> Quantity:  <button onClick={() => decreaseQuantity(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <h4>Total price : ${totalPrice}</h4>
          </div>
          
        ) : (
          <p>Your cart is empty.</p>
        )}


      </>

    
  )
};

export default ShoppingCart;