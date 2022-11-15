import React, {useState, useContext} from 'react';
import { products } from '../../../data/products';
import { useParams } from 'react-router-dom';
import ProductNutrients from '../../../components/Product/ProductNutrients/ProductNutrients';
import { TbAsterisk } from 'react-icons/tb';
import Allergens from '../../../components/Allergens/Allergens';
import DonenessSelect from '../../../components/DonenessSelect/DonenessSelect';
import Quantity from '../../../components/Quantity/Quantity';
import { addToCartHandler } from '../../../helpers/addToCartHandler';
import { CartContext } from '../../../App';


function Product() {
    const [quantity, setQuantity] = useState(1)
    const {id} = useParams();
    const product = products.find(product => product.id === +id);
    const unqiqId = "id" + Math.random().toString(16).slice(2);
    const {cart, setCart} = useContext(CartContext);

    if (!product) {
        return <div>No product</div>
    }

    return (
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <img className="w-full m-0" 
                     src={product.image} 
                     alt={product.title}/>
            </div>
            <div className="p-4">
                <h3 className='text-black flex items-center mb-2 text-2xl font-bold'>
                    {product.title}
                    <TbAsterisk className="ml-2"/>
                </h3>
                <span>{product.weight}</span>
                <p className="mb-2 text-slate-900 text-xl mt-1">
                    {product.description}
                </p>
                <span>Энергетическая ценность на порцию:</span>
                <ProductNutrients product={product}/>
                <span className="mb-1">
                    Выберите степень прожарки:
                </span>
                <DonenessSelect className="mb-4 w-64"/>
                <Allergens product={product} className='mb-4'/>
                <div className="flex items-center">
                    <span className="font-mono text-3xl i mr-6">
                        {product.price}₽
                    </span>
                    <Quantity quantity={quantity} setQuantity={setQuantity}/>
                    <button onClick={() => addToCartHandler(product, quantity, setQuantity, cart, setCart, unqiqId)} className="ml-4 flex text-xl font-semibold rounded-full border-solid border-amber-300 border-2 px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:border-amber-400 transition">
                       Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;