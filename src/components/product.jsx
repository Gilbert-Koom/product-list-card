import { useState } from "react";

function Item({name,image,category,price}) {
	const [cart,setCart]=useState(0)
	function cartModifier(params) {
		setCart(cart +1)
		
	}
    return(
        <>
					<div>
						<img src={image} alt="Product image" />
						<button onClick={cartModifier}>Add to Cart</button>
					</div>
					<div>
						<p>{name}</p>
						<p>{category}</p>
						<p>{price}</p>
						<p>{cart}</p>
					</div>
        </>
    );
    
}

export default Item