import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth=getAuth(app)

const Products = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>this is product page</h2>
            {user? user.displayName:'no boday'}
        </div>
    );
};

export default Products;