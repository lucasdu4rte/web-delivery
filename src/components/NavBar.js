import React from "react";
import logo from "images/logo.png";
const NavBar = () => {
  return (
    <header className="navbar px-2 py-2 " style={{ background: "#0b2031" }}>
      <section className="navbar-section">
        <a href="..." className="navbar-brand mr-2">
          <img src={logo} alt="" />
        </a>
        <h5 className="text-light">Pizzaria Don Juan</h5>
      </section>
      <section className="navbar-section">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <span className="column col-12 text-light text-right">
                Diego Fernandes
              </span>
              <a href="/" className="column col-12 text-gray text-right">
                Sair do app
              </a>
            </div>
          </div>
          <div className="divider-vert" />
          <div className="column">
            <button className="btn btn-primary btn-action s-circle">
              <i className="icon icon-more-vert" />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
