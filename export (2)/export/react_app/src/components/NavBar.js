import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from "./cart.png"
import logo from "./PizzeriaLogo.png"

function NavBar(props) {
    return (
      <div>
        <nav className="navbar navbar-xs  navbar-dark bg-dark navbar-expand">
          <div className="container-fluid">
            <a className="navbar-brand">Pizzeria</a>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link
                    className=" nav-link active "
                    aria-current="page"
                    to="/"
                  >
                    <img
                      width={30}
                      src={logo}
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/order">
                    Order Pizza
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/build">
                    Build Ur Pizza
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="nav-link" to="/cart">
              <button
                type="button"
                className="btn btn-warning text-white"
              >
                <img src={cartImg} width={20} className="img-invert py-0"></img>
                &nbsp; Shopping Cart
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;