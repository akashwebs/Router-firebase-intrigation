import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user,handleSignOut } = useFirebase();
    console.log(user)
  
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span>{user?.displayName}</span>
                {user?.uid ?
                    <button onClick={handleSignOut}>log out</button>
                    :
                    <Link to={'/login'}>login</Link>}
            </nav>
        </div>
    );
};

export default Header;