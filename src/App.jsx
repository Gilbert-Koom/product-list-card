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


function App() {

  const [items,setItems]=useState(data)

	const handleAddToCart = (id) => {
    // Update the number for the item with the given id
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, number: item.number + 1 } : item
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
				<button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
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
      <ul>
        {foods}
      </ul>

      <Cart someItems={items} numberOfItemsInCart={5}/>
    </>
  )
}

export default App
