import classes from "./Auth.module.css";
import { authActions } from "../store/authentication-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailIsValid = email !== "" && email.includes("@") && emailTouched;
  const passwordIsValid =
    password !== "" && password.length > 7 && passwordTouched;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const passwordBlurHandler = (e) => {
    setPasswordTouched(true);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) formIsValid = true;

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              value={email}
              onBlur={emailBlurHandler}
            />
            {!emailIsValid && emailTouched && (
              <p className={classes["error-text"]}>
                Please enter a valid email address
              </p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              value={password}
              onBlur={passwordBlurHandler}
            />
            {!passwordIsValid && passwordTouched && (
              <p className={classes["error-text"]}>
                Your password should be at least 8 characters
              </p>
            )}
          </div>
          <button
            className={!formIsValid ? classes.disabled : ""}
            disabled={!formIsValid}
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
