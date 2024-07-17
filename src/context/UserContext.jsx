import {createContext, useEffect, useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

// children are the components that are wrapped by the provider
export const UserProvider = ({children}) => { 
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const auth = getAuth();

    useEffect(() => {
        const storedIdToken = localStorage.getItem('idToken');
        const storedAccessToken = localStorage.getItem('accessToken');

        if (storedIdToken && storedAccessToken) {
            const credential = GoogleAuthProvider.credential(storedIdToken, storedAccessToken);
            signInWithCredential(auth, credential).then(result => {
                setUserData(result.user);
            }).catch(error => {
                setUserData(null);
                console.log("Token is expired:", error);
            });
        }
    }, []);

    const handleAuth = () => {
        console.log("handleAuth");
        if (userData == null) {
            signInWithPopup(auth, provider).then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                localStorage.setItem('idToken', credential.idToken);
                localStorage.setItem("accessToken", credential.accessToken)
                setUserData(result.user);
            })
            .then(() => navigate("/page1"))
            .catch(error => {
                console.log("Error signing in with popup:", error);
            })
        } else {
            navigate("/page1");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('accessToken');
        setUserData(null);
        navigate("/");
      }

    return <UserContext.Provider value={ {userData, handleAuth, handleLogout} }>
        {children}
    </UserContext.Provider>
} 