import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    
    return (
        <div>
             <h2>please login now</h2>
             <div>
                 <button onClick={signInWithGoogle}>google login</button>
             </div>
            <form action="">
                <input type="email" name="" placeholder='your email' id="" />
                <br />
                <input type="password" name="" placeholder='your password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;