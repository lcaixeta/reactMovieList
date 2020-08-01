import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className="Header row text-center">
      <div className="col-4">
        <NavLink exact activeClassName="active" to="/" className="Header-link ">        Home
        </NavLink>
      </div>
      <div className="col-4">
        <NavLink activeClassName="active" to="/order" className="Header-link">        Comandas
        </NavLink>
      </div>
      <div className="col-4">
        <NavLink activeClassName="active" to="/cardapio" className="Header-link">        Cardápio
        </NavLink>
      </div>
    </div>
  );
}
export default Header;