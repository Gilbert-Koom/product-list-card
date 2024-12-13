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
				<p className='text-rose900'>{item.name}</p>
				<div>
          <span className='text-red'>{item.number}&#215;</span>
					<span className='text-rose500'>@ ${item.price}</span>  
					<span className='text-rose500'>${item.number * item.price}</span>
        </div>

				</div>
				<button onClick={() => removeFromCart(item.id)}>
					<img src={Remover} alt="" className='inline-block h-5 w-5 rounded-full ring-2 ring-rose500 p-1'/>
				</button>
        
        
        
      </li>
    ));

		const dialogueContent = items
    .filter(item => item.number > 0)
    .map(item => (
      <li key={item.id} className='flex w-[80%] bg-red-950 justify-between items-center'>
				<div>
          {item.id===0 ? <img src={waffle} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===1 ? <img src={creme} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===2 ? <img src={macaron} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===3 ? <img src={Tiramisu} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===4 ? <img src={Baklava} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===5 ? <img src={Pie} alt="" className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===6 ? <img src={Cake} alt="" className='w-[48px] h-[48px]' /> : <p></p>}
          {item.id===7 ? <img src={Brownie} alt=""  className='w-[48px] h-[48px]'/> : <p></p>}
          {item.id===8 ? <img src={Cotta} alt="" className='w-[48px] h-[48px]'/> : <p></p>}

				</div>
				<div className=''>
					<p className='text-rose900'>{item.name}</p>
					<div>	  
						 <span className='text-red'>{item.number}&#215;</span>
						 <span className='text-rose500'>@ ${item.price}</span>
					</div>
				</div>
				<p className='text-rose900'>${item.number * item.price}</p>
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
            <p className='text-rose900'>Add To Cart</p>
          </button>
					<div className={item.button2} id='second_button'>
						<button onClick={() => handleSubtractToCart(item.id)}>
							<img src={Decrement} className='inline-block h-5 w-5 rounded-full ring-2 ring-white p-1' alt="" />
						</button>
						<p className='text-white'>{item.number}</p>
						<button onClick={() => handleAddToCart(item.id)}>
							<img src={Increment} alt="" className='inline-block h-5 w-5 rounded-full ring-2 ring-white p-1' />
						</button>

					</div>

				</div>
				

        
				
			</div>
			<div>
				<p className='text-rose500'>{item.category}</p>   
				<p className='text-rose900'>{item.name}</p>
				<p className='text-red'>${item.price}</p>
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
			<div className='lg:grid lg:grid-cols-10'>
				<div className='lg:col-span-7'>
					<p className='ml-[7.5%] text-rose900'>Desserts</p>
						<ul className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-3'>
							{foods}
						</ul>
				</div>
				<div className='w-[85%] m-auto lg:col-span-3 bg-white'>
					<p className='w-[79%] m-auto text-red'>Your Cart({totalItemsInCart})</p>
					<div>
						{
							isCartEmpty ?
							<div className=''>
								<div className='flex justify-center items-center'>
									<img src={Empty} alt="" />
								</div>
								<p className='flex justify-center'><p className='text-rose500'>Your added items will appear here</p></p>
							</div>:
							<div className="">
								<ul className='w-[85%] m-auto'>{filteredItems}</ul>
								<div className='flex justify-between w-[77%] m-auto'>
									<p className='text-rose900'>Order Total </p>
									<p className='text-rose900'>${orderTotal}</p>
								</div>
								<div className='flex m-auto justify-center bg-slate-600 w-[77%] rounded-md'>
									<img src={Carbon} alt="" />
									<p className='text-rose900'>This carbon neutral delivery</p>

								</div>
								
								<AlertDialog>
									<AlertDialogTrigger className='w-[77%] bg-red rounded-lg m-auto flex justify-center items-center'>
										<p className='text-white'>Confirm Order</p>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>
												<img src={confirmed} alt="" />
												<h1 className='text-rose900'>Order Confirmed</h1>
												<p className='text-rose500'>We hope you enjoy our food!</p>
											</AlertDialogTitle>
											<AlertDialogDescription>
												{dialogueContent}
												<div className='flex justify-between text-rose900'>
													<p>Order Total</p>
													<p>${orderTotal}</p>
												</div>
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter className='bg-red text-white rounded-[999px]'>
											
											<AlertDialogAction onClick={()=>{alertAction()}}>
												<p className=''>Start New Order</p>
											</AlertDialogAction>
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
