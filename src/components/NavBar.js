import React from 'react';
// import logo from "images/logo.png";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NavBar = ({ user }) => {
  return (
    <header
      className="navbar"
      style={{
        background: '#0b2031',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '80px',
      }}
    >
      <section className="navbar-section">
        <a href="..." className="navbar-brand mr-2">
          <img src={`${process.env.PUBLIC_URL}assets/images/logo.png`} alt="" />
        </a>
        <h5 className="text-light">Pizzaria Don Juan</h5>
      </section>
      <section className="navbar-section">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <span className="column col-12 text-light text-right">
                {user.name}
              </span>
              <a href="/" className="column col-12 text-gray text-right">
                Sair do app
              </a>
            </div>
          </div>
          <div className="divider-vert" />
        </div>
        <section className="navbar-center" style={{ paddingLeft: '0.4rem' }}>
          <button type="button" className="btn btn-primary btn-action s-circle">
            <i className="icon icon-menu" />
          </button>
        </section>
      </section>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.profile,
});

export default connect(mapStateToProps)(NavBar);
