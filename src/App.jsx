import waffle from './assets/image-waffle-mobile.jpg'
import creme from './assets/image-creme-brulee-mobile.jpg'
import macaron from './assets/image-macaron-mobile.jpg'
import Tiramisu from './assets/image-tiramisu-mobile.jpg'
import Baklava from './assets/image-baklava-mobile.jpg'
import Cake from './assets/image-cake-mobile.jpg'
import Brownie from './assets/image-brownie-mobile.jpg'
import Cotta from './assets/image-panna-cotta-mobile.jpg'
import Pie from './assets/image-meringue-mobile.jpg'
import { useEffect, useState } from "react"
import data from "./data"
import Remover from './assets/icon-remove-item.svg'
import Carbon from './assets/icon-carbon-neutral.svg'
import Increment from './assets/icon-increment-quantity.svg'
import Decrement from './assets/icon-decrement-quantity.svg'
import Empty from './assets/illustration-empty-cart.svg'
import './App.css'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function App() {

  const [items,setItems]=useState(data)
	const [isCartEmpty,setIsCartEmpty]=useState(true)


  const removeFromCart = (id) => {
    setItems(items.map(product => 
      product.id === id ? { ...product, number: 0 } : product
    ));
  };
	const changeStyle = (id) => {
    setItems(items.map(product => 
      product.id === id ? { ...product, button1:'dontShow',button2:'show',number: product.number +1 } : product
    ));
  };


	const totalItemsInCart= items[0].number+items[1].number+items[2].number+items[3].number+items[4].number+items[5].number+items[6].number+items[7].number+items[8].number
	const orderTotal= (items[0].number*items[0].price)+(items[1].number*items[1].price)+(items[2].number*items[2].price)+(items[3].number*items[3].price)+(items[4].number*items[4].price)+(items[5].number*items[5].price)+(items[6].number*items[6].price)+(items[7].number*items[7].price)+(items[8].number*items[8].price)




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

		const dialogueContent = items
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id}>
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
        <p>{item.name}</p>
        <p>
          &#215; {item.number} @ ${item.price} = ${item.number * item.price}
        </p>
      </li>
    ));




	const handleAddToCart = (id) => {
		setIsCartEmpty(false)
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
        item.id === id && item.number > 0 ? { ...item, number: item.number - 1 } : item
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
					<button className={item.button1} onClick={()=>changeStyle(item.id)}>Add to Cart</button>
					<div className={item.button2}>
						<button onClick={() => handleSubtractToCart(item.id)}>
							<img src={Decrement} alt="" />
						</button>
						<p>{item.number}</p>
						<button onClick={() => handleAddToCart(item.id)}>
							<img src={Increment} alt="" />
						</button>

					</div>

				</div>
				

        
				
			</div>
			<div>
				<p>{item.category}</p>   
				<p>{item.name}</p>
				<p>{item.price}</p>
			</div>

		</li>
	)

  function alertAction() {
    setItems(data)
    setIsCartEmpty(true)
    
  }

  useEffect(()=>{
    if (totalItemsInCart===0) {
      setIsCartEmpty(true)
      
    }
  },[totalItemsInCart])



  return (
    <>
      <ul className="bg-gray-200">
        {foods}
      </ul>

			<div>
				<p>Carts({totalItemsInCart})</p>
				<div>
					{
						isCartEmpty ?
						<div>
							<img src={Empty} alt="" />
							<p>Your added items will appear here</p>
						</div>:
						<div className="bg-red-950">
							<ul>{filteredItems}</ul>
							<p>Order Total ${orderTotal}</p>
							<p> <img src={Carbon} alt="" /> This carbon neutral delivery</p>
							<AlertDialog>
								<AlertDialogTrigger>Confirm Order</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>
											{dialogueContent}
											<div>
												<p>Order Total</p>
												<p>${orderTotal}</p>
											</div>
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										
										<AlertDialogAction onClick={()=>{alertAction()}}>Start New Order</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>

					}

				</div>
			</div>


    </>
  )
}

export default App
