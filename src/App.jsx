import Cart from "./components/cart"
import waffle from './assets/image-waffle-mobile.jpg'
import creme from './assets/image-creme-brulee-mobile.jpg'
import macaron from './assets/image-macaron-mobile.jpg'
import Tiramisu from './assets/image-tiramisu-mobile.jpg'
import Baklava from './assets/image-baklava-mobile.jpg'
import Cake from './assets/image-cake-mobile.jpg'
import Brownie from './assets/image-brownie-mobile.jpg'
import Cotta from './assets/image-panna-cotta-mobile.jpg'
import Pie from './assets/image-meringue-mobile.jpg'
import { useState } from "react"
import data from "./data"
import Remover from './assets/icon-remove-item.svg'
import Increment from './assets/icon-increment-quantity.svg'
import Decrement from './assets/icon-decrement-quantity.svg'


function App() {

  const [items,setItems]=useState(data)

  const removeFromCart = (id) => {
    setItems(items.map(product => 
      product.id === id ? { ...product, number: 0 } : product
    ));
  };


	const totalItemsInCart= items[0].number+items[1].number+items[2].number+items[3].number+items[4].number+items[5].number+items[6].number+items[7].number+items[8].number


  const filteredItems = items
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id}>
        <p>{item.name}</p>
        <p>
          &#215; {item.number} @ ${item.price} = ${item.number * item.price}
        </p>
        <button onClick={() => removeFromCart(item.id)}>
					<img src={Remover} alt="" />
				</button>
      </li>
    ));



	const handleAddToCart = (id) => {
    // Update the number for the item with the given id
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, number: item.number + 1 } : item
      )
    );
  };


  const handleSubtractToCart = (id) => {
    // Update the number for the item with the given id
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, number: item.number - 1 } : item
      )
    );
  };



	const foods=items.map(
		(item)=><li key={item.id}>
			<div>
				<div>
          {item.id===0 ? <img src={waffle} alt="" /> : <p></p>}
          {item.id===1 ? <img src={creme} alt="" /> : <p></p>}
          {item.id===2 ? <img src={macaron} alt="" /> : <p></p>}
          {item.id===3 ? <img src={Tiramisu} alt="" /> : <p></p>}
          {item.id===4 ? <img src={Baklava} alt="" /> : <p></p>}
          {item.id===5 ? <img src={Pie} alt="" /> : <p></p>}
          {item.id===6 ? <img src={Cake} alt="" /> : <p></p>}
          {item.id===7 ? <img src={Brownie} alt="" /> : <p></p>}
          {item.id===8 ? <img src={Cotta} alt="" /> : <p></p>}

				</div>
				<button onClick={() => handleAddToCart(item.id)}>
					<img src={Increment} alt="" />
				</button>
        <button onClick={() => handleSubtractToCart(item.id)}>
					<img src={Decrement} alt="" />
				</button>
				<p>{item.number}</p>
			</div>
			<div>
				<p>{item.category}</p>   
				<p>{item.name}</p>
				<p>{item.price}</p>
			</div>

		</li>
	)

  return (
    <>
      <ul className="bg-gray-200 ml-96">
        {foods}
      </ul>

      <p>Carts({totalItemsInCart})</p>
      <ul>{filteredItems}</ul>
    </>
  )
}

export default App
