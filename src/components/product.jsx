import { useState } from "react";

function Item({name,image,category,price}) {
    return(
        <>
					<div>
						<img src={image} alt="Product image" />
						<button>Add to Cart</button>
					</div>
					<div>
						<p>{name}</p>
						<p>{category}</p>
						<p>{price}</p>
					</div>
        </>
    );
    
}

export default Item