import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="nav">
            <h3>Ether</h3>
            <div>
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Shorts</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar