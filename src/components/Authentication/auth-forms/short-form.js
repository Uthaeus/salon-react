import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../store/auth-context";

function ShortForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [notice, setNotice] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  let emailIsValid = enteredEmail.includes("@") && enteredEmail.length > 6;
  let passwordIsValid = enteredPassword.length >= 6;

  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function passwordChangeHandler(e) {
    setEnteredPassword(e.target.value);
  }

  function noticeCheckHandler() {
    if (notice !== "") {
      setNotice("");
    }
  }

  function clearForm() {
    setEnteredEmail("");
    setEnteredPassword("");
  }

  function submitHandler(e) {
    e.preventDefault();

    if (emailIsValid && passwordIsValid) {
      if (
        enteredEmail === authCtx.userEmail &&
        enteredPassword === authCtx.userPassword
      ) {
        authCtx.login();
        clearForm();
        navigate("/");
      } else {
        setNotice("Incorrect Email or Password");
        clearForm();
      }
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <p className="text-center text-red">{notice}</p>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={enteredEmail}
          onFocus={noticeCheckHandler}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={enteredPassword}
          onFocus={noticeCheckHandler}
          onChange={passwordChangeHandler}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ShortForm;
