import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="login">
          <div className="login--panel">
            <header className="login--panel--header">
              <img
                src={logo}
                className="login--panel--header-logo"
                alt="logo"
              />
              <div className="login--panel--header-title">
                <p>Liquidity Manager</p>
              </div>
            </header>
            <form className="login--panel--form">
              <div className="login--panel--form-control">
                <label className="login--panel--form-control-label">
                  Username:
                </label>
                <input className="login--panel--form-control-input" />
              </div>
              <div className="login--panel--form-control">
                <label className="login--panel--form-control-label">
                  Password:
                </label>
                <input className="login--panel--form-control-input" />
              </div>
              <div className="login--panel--form-control">
                <input
                  type="checkbox"
                  className="login--panel--form-checkbox"
                />
                Remember Me
              </div>
              <div className="login--panel--form-button-container">
                <button className="login--panel--form-button-container--button">
                  Login
                </button>
              </div>
            </form>
            <footer className="login--panel--footer">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ForgotPassword
              </a>
            </footer>
          </div>
        </div>
        <div className="login-2">
          <div className="login-2--panel">
            <header className="login-2--panel--header">
              <img
                src={logo}
                className="login-2--panel--header-logo"
                alt="logo"
              />
              <div className="login-2--panel--header-title">
                <p>Liquidity Manager</p>
              </div>
            </header>
            <form className="login-2--panel--form">
              <div className="login-2--panel--form-control">
                <label className="login-2--panel--form-control-label">
                  Username:
                </label>
                <input className="login-2--panel--form-control-input" />
              </div>
              <div className="login-2--panel--form-control">
                <label className="login-2--panel--form-control-label">
                  Password:
                </label>
                <input className="login-2--panel--form-control-input" />
              </div>
              <div className="login-2--panel--form-checkbox-group">
                <input
                  type="checkbox"
                  className="login-2--panel--form-checkbox-group-checkbox"
                />
                <span className="login-2--panel--form-checkbox-group-text">
                  Remember Me
                </span>
              </div>
              <div className="login-2--panel--form-button-container">
                <button className="login-2--panel--form-button-container--button">
                  <span className="login-2--panel--form-button-container--text">
                    Login
                  </span>
                </button>
              </div>
            </form>
            <footer className="login-2--panel--footer">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ForgotPassword
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
