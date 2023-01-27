import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector(state => state.user.users.length)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient d-flex justify-content-between px-5">
        <a className="navbar-brand ml-2 text-success">
          Navbar
        </a>

        <a className="nav-link disabled text-white">
          Cart: <span className="btn btn-warning rounded-circle text-center">{cartData}</span>
        </a>
      </nav >
    </div >
  );
};

export default Header;
