const CartItem = ({id, name, price, quantity}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
        )
}

export default CartItem