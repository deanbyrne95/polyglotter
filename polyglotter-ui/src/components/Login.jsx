import {Button} from "@mui/material";
import "./Login.css";

import {signInWithGoogle} from '../firebase.js'

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="/src/assets/polyglotter-icon10x.png" width={512} height={512} alt="logo"/>
                <div className="login__text">
                    <h1>Sign in to PolyGlotter</h1>
                </div>
                <Button onClick={signInWithGoogle}>Sign In with Google</Button>
            </div>
        </div>
    );
};

export default Login;
