import Item from "./components/product"
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
	const foods=items.map(
		(item)=><li key={item.id}>
			<div>
				<div>
					{
						item.id===0 ? (
							<img src={Cotta}/>
						):(<p></p>)
					}
				</div>
				<img src={macaron} alt="" />
				<button>Add to Cart</button>
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
      <p>Deserts</p>
			<ul>{foods}</ul>
      <Item
        name={'Waffle'}
        image={waffle}
        category={'Desserts Waffle with Berries'}
        price={'$6.50'}

      />
      <Item
        name={'Crème Brûlée'}
        image={creme}
        category={'Vanilla Bean Crème Brûlée'}
        price={'$7.50'}

      />
      <Item
        name={'Macaron'}
        image={macaron}
        category={'Macaron Mix of Five'}
        price={'$8.00'}

      />
      <Item
        name={'Tiramisu'}
        image={Tiramisu}
        category={'Classic Tiramisu'}
        price={'$5.50'}

      />
      <Item
        name={'Baklava'}
        image={Baklava}
        category={'Pistachio Baklava'}
        price={'$4.00'}

      />
      <Item
        name={'Pie'}
        image={Pie}
        category={'Lemon Meringue Pie'}
        price={'$5.00'}

      />
      <Item
        name={'Cake'}
        image={Cake}
        category={'Red Velvet Cake'}
        price={'$4.50'}

      />
      <Item
        name={'Brownie'}
        image={Brownie}
        category={'Salted Caramel Brownie'}
        price={'$4.50'}

      />
      <Item
        name={'Cotta'}
        image={Cotta}
        category={'Vanilla Panna Cotta Panna'}
        price={'$6.50'}

      />

      <Cart someItems={items}/>
    </>
  )
}

export default App
