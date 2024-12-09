
import { useState } from 'react'
import Cake from '../assets/icon-remove-item.svg'
import data from '../data';

function Cart({someItems,numberOfItemsInCart}) {

	const [products,setProducts]=useState(someItems)
	const removeFromCart = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, number: 0 } : product
    ));
  };

	const cartItems = products
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id}>
        <p>{item.name}</p>
        <p>
          &#215; {item.number} @ ${item.price} = ${item.number * item.price}
        </p>
        <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
      </li>
    ));

	const filteredItems=someItems.map(
		(item)=><li key={item.id}>
			<p>{item.name}</p>
			<p>
				&#215; {item.number} @ ${item.price} ${item.number*item.price}
				<button>
					<img src={Cake} alt="" />
				</button>
			</p>
		</li>
	)

	return(
		<>
				<p>Your Cart({numberOfItemsInCart})</p>
				<ul>
					{cartItems}


				</ul>
				<p>Carts</p>
				
		</>
)
    
}

export default Cart