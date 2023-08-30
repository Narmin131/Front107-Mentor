import React from "react";
import { NavLink } from "react-router-dom";

const AuthBtn = () => {
  const user = JSON.parse(localStorage.getItem("NewUser"));

  const admin = JSON.parse(localStorage.getItem("Admin"));

  const logOut = (params)=>{
    localStorage.removeItem(`${params}`)
    window.location.reload()
  }

  const auth = () => {
    if (user) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" onClick={()=>logOut("NewUser")}>
                Log out
              </a>
            </li>
          </ul>
        </div>
      );
    } else if (admin) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi {admin.name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={()=>logOut("Admin")}>
                Log out
              </a>
            </li>
            <li>
              <NavLink className="dropdown-item" to='/dasboard'>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      return <NavLink to="/login">
        <i className="fa-solid fa-user"></i>
      </NavLink>;
    }
  };

  return <>{auth()}</>;
};

export default AuthBtn;
