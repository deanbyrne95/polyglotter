import { Button } from "@mui/material";

import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Login.css";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithRedirect(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="logo" />
        <div className="login__text">
          <h1>Sign in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
