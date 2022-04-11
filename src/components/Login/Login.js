import { getAuth } from 'firebase/auth';
import React from 'react';
import { signInWithGoogle, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location=useLocation()
    const navigate=useNavigate()
    const from=location?.state?.from?.pathname || '/';


    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, {replace:true})
        })
    }
    return (
        <div>
             <h2>please login now</h2>
             <div>
                 <button onClick={handleGoogleSignIn}>google login</button>
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