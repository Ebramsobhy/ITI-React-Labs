import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="d-flex justify-content-around align-items-center navbar">
            <h2>Logo</h2>
            <ul className='list-items'>
                <li className='item'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='item'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='item'>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className='item'>
                    <Link to='/count'>Counter</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar 