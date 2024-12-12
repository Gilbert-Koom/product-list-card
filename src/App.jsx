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
import Cart from './assets/icon-add-to-cart.svg'
import Empty from './assets/illustration-empty-cart.svg'
import confirmed from './assets/icon-order-confirmed.svg'
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
      product.id === id ? { ...product, button1:'dontShow',button2:'show'} : product
    ));
  };


	const totalItemsInCart= items[0].number+items[1].number+items[2].number+items[3].number+items[4].number+items[5].number+items[6].number+items[7].number+items[8].number
	const orderTotal= (items[0].number*items[0].price)+(items[1].number*items[1].price)+(items[2].number*items[2].price)+(items[3].number*items[3].price)+(items[4].number*items[4].price)+(items[5].number*items[5].price)+(items[6].number*items[6].price)+(items[7].number*items[7].price)+(items[8].number*items[8].price)


  const filteredItems = items
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id} className='flex items-center justify-between w-[90%] m-auto'>
				<div>
				<p>{item.name}</p>
				<p>
          {item.number}&#215;  @ ${item.price} = ${item.number * item.price}
        </p>

				</div>
				<button onClick={() => removeFromCart(item.id)}>
					<img src={Remover} alt="" />
				</button>
        
        
        
      </li>
    ));

		const dialogueContent = items
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id} className='flex w-[80%] bg-red-950 justify-around items-center'>
				<div>
          {item.id===0 ? <img src={waffle} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===1 ? <img src={creme} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===2 ? <img src={macaron} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===3 ? <img src={Tiramisu} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===4 ? <img src={Baklava} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===5 ? <img src={Pie} alt="" className='w-5 h-5'/> : <p></p>}
          {item.id===6 ? <img src={Cake} alt="" className='w-5 h-5' /> : <p></p>}
          {item.id===7 ? <img src={Brownie} alt=""  className='w-5 h-5'/> : <p></p>}
          {item.id===8 ? <img src={Cotta} alt="" className='w-5 h-5'/> : <p></p>}

				</div>
				<div className=''>
					<p>{item.name}</p>
					<div>
						 {item.number}&#215; @ ${item.price}

					</div>
				</div>
				<p>${item.number * item.price}</p>
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
		(item)=><li key={item.id} className='w-[85%] m-auto'>
			<div>
				<div className='relative mb-7'>
          {item.id===0 ? <img src={waffle} alt="" className='rounded-md'/> : <p></p>}
          {item.id===1 ? <img src={creme} alt="" className='rounded-md' /> : <p></p>}
          {item.id===2 ? <img src={macaron} alt="" className='rounded-md' /> : <p></p>}
          {item.id===3 ? <img src={Tiramisu} alt="" className='rounded-md'/> : <p></p>}
          {item.id===4 ? <img src={Baklava} alt=""  className='rounded-md'/> : <p></p>}
          {item.id===5 ? <img src={Pie} alt="" className='rounded-md' /> : <p></p>}
          {item.id===6 ? <img src={Cake} alt="" className='rounded-md' /> : <p></p>}
          {item.id===7 ? <img src={Brownie} alt=""  className='rounded-md'/> : <p></p>}
          {item.id===8 ? <img src={Cotta} alt=""  className='rounded-md'/> : <p></p>}
					<button className={item.button1} onClick={()=>changeStyle(item.id)} id='button_1'>
            <img src={Cart} alt="" />
            <p>Add To Cart</p>
          </button>
					<div className={item.button2} id='second_button'>
						<button onClick={() => handleSubtractToCart(item.id)}>
							<img src={Decrement} alt="" />
						</button>
						<p className='text-white'>{item.number}</p>
						<button onClick={() => handleAddToCart(item.id)}>
							<img src={Increment} alt="" />
						</button>

					</div>

				</div>
				

        
				
			</div>
			<div>
				<p>{item.category}</p>   
				<p>{item.name}</p>
				<p>${item.price}</p>
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
			<div className='md:grid md:grid-cols-10 lg:grid-cols-10'>
				<div className='md:col-span-7 lg:col-span-7'>
					<p className='ml-[7.5%]'>Desserts</p>
						<ul className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
							{foods}
						</ul>
				</div>
				<div className='bg-yellow-300 w-[85%] m-auto md:col-span-3 md:absolute md:w-[30%] md:left-[72%] md:top-[4%] lg:col-span-3 lg:absolute lg:w-[30%] lg:left-[72%] lg:top-[4%]'>
					<p className='w-[79%] m-auto text-[red] '>Your Cart({totalItemsInCart})</p>
					<div>
						{
							isCartEmpty ?
							<div className=''>
								<div className='flex justify-center items-center'>
									<img src={Empty} alt="" />
								</div>
								<p className='flex justify-center'><p className=''>Your added items will appear here</p></p>
							</div>:
							<div className="">
								<ul className='w-[85%] m-auto'>{filteredItems}</ul>
								<div className='flex justify-between w-[77%] m-auto'>
									<p>Order Total </p>
									<p>${orderTotal}</p>
								</div>
								<div className='flex m-auto justify-center bg-slate-600 w-[77%] rounded-md'>
									<img src={Carbon} alt="" />
									<p className=''>This carbon neutral delivery</p>

								</div>
								
								<AlertDialog>
									<AlertDialogTrigger className='w-[77%] bg-green-100 rounded-lg m-auto flex justify-center items-center'>
										<p>Confirm Order</p>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												<img src={confirmed} alt="" />
												<h1>Order Confirmed</h1>
												<p>We hope you enjoy our food!</p>
											</AlertDialogTitle>
											<AlertDialogDescription>
												{dialogueContent}
												<div className='flex justify-between'>
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
			</div>


    </>
  )
}

export default App
