import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>Ether</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/buzos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={`/category/remeras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/shorts`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar