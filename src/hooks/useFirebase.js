import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {

    const [user, setUser] = useState({})

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })
    }, [])
    return { user, setUser, signInWithGoogle,handleSignOut }
}

export default useFirebase;