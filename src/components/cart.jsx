import { useState } from 'react'
import Cake from '../assets/icon-remove-item.svg'

function Cart({someItems}) {
	const filtered=someItems.filter(
		(item)=>item.number>=1
	)
	const [cartItems,setCartItems]=useState(filtered)
	const filteredItems=cartItems.map(
		(item)=><li key={item.id}>
			<p>{item.name}</p>
			<p>
				&#215; {item.number} @ ${item.price} ${item.number*item.price}
				<button onClick={()=>{
					setCartItems(
						cartItems.filter(a=>
							a.id !== item.id
						)
					)
				}}>
					<img src={Cake} alt="" />
				</button>
			</p>
		</li>
	)

	return(
		<>
				<p>Your Cart()</p>
				<ul>
					{filteredItems}

				</ul>
		</>
)
    
}

export default Cart