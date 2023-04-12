import { useState } from "react";

const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  password: "",
  confirm_password: "",
};

function FullForm() {
  const [notice, setNotice] = useState("");
  const [state, setState] = useState(initialState);


  function noticeCheckHandler() {
    if (notice !== "") {
      setNotice("");
    }
  }

  function clearForm() {
    setState(initialState);
  }

  function inputChangeHandler(e) {
    setState({
        ...state,
        [e.target.id]: e.target.value
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const emailIsValid = state.email.length > 6 && state.email.includes("@");
    const firstNameIsValid = state.first_name !== "";
    const lastNameIsValid = state.last_name !== "";
    const phoneIsValid = state.phone.length >= 10;
    const passwordIsValid =
        state.password.length >= 6 && state.password === state.confirm_password;

    const formIsValid =
        emailIsValid &&
        firstNameIsValid &&
        lastNameIsValid &&
        phoneIsValid &&
        passwordIsValid;

    if (formIsValid) {

    } else {
        setNotice('Invalid input');
        clearForm();
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

          value={state.email}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          className="form-control"
          value={state.first_name}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          className="form-control"
          value={state.last_name}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          value={state.phone}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={state.password}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          className="form-control"
          value={state.confirm_password}
          onFocus={noticeCheckHandler}
          onChange={inputChangeHandler}
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

export default FullForm;
