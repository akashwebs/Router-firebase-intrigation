import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth=getAuth(app)
const Header = () => {
  const [user]=useAuthState(auth)
    
  
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span>{user?.displayName}</span>
                {user?.uid ?
                    <button onClick={()=>signOut(auth)}>log out</button>
                    :
                    <Link to={'/login'}>login</Link>}
            </nav>
        </div>
    );
};

export default Header;