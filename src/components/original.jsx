 
import Cake from '../assets/icon-remove-item.svg'

function Cart({someItems,numberOfItemsInCart}) {
	let filtered=someItems.filter(
		(item)=>item.number>=1
	)


	const filteredItems=filtered.map(
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
					{filteredItems}
				</ul>
		</>
)
    
}

export default Cart