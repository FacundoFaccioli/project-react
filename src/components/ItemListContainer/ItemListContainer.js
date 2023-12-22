import { useState, useEffect, useContext}  from 'react'
import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import CartItem from '../CartItem/CartItem'

import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { cart } = useContext(CartContext)

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
            
            {cart.map(p => (<CartItem key={p.id} {...p} />))}
            
        </div>
    )
}

export default ItemListContainer