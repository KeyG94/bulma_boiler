import React from 'react';
import './css/mystyles.css';

function App() {
	return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <span className="is-size-4 has-text-light">Logo</span>
            </a>

            <span href="/" role="button" className="navbar-burger burger has-text-light">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/" className="button is-link">
                  Link
                </a>
                <a href="/" className="button is-link">
                  Link
                </a>
                <a href="/" className="button is-link">
                  Link
                </a>
                <a href="/" className="button is-info active">
                  Link
                </a>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </nav>

    <section className="hero is-medium">
      <div className="hero-body py-6 px-6">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-12-mobile is-6-tablet hero-text">
              <h1 className="title is-title is-size-1 has-text-light has-text-weight-bold">
                Analytics made easy.
              </h1>
              <p className="subtitle has-text-light mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation. 
              </p>
              <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Email"></input>
              </div>
                <div className="control">
                  <a href="/" className="button is-info">
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-6-desktop is-hidden-mobile is-hidden-tablet-only">
              <img src="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png" alt="Graph" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <footer className="footer py-4">
      <div className="container">
        <p className="has-text-light">© 2020 Copyright Text</p>
      </div>
    </footer>
    </>
	);
}

export default App;
