import {Button} from "@mui/material";
import "./Login.css";

import {signInWithGoogle} from '../firebase.js'
import {useStateValue} from "./StateProvider.jsx";

const Login = () => {
    const [{}, dispatch] = useStateValue();
    return (
        <div className="login">
            <div className="login__container">
                <img src="/src/assets/polyglotter-icon10x.png" width={512} height={512} alt="logo"/>
                <div className="login__text">
                    <h1>Sign in to Messaging App</h1>
                </div>
                <Button onClick={() => signInWithGoogle(dispatch)}>Sign In with Google</Button>
            </div>
        </div>
    );
};

export default Login;
