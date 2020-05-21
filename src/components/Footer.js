import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="container bg-dark">
        <div className="center-col grid col-3 footer">
          <div className="grid col-1 left footer-social">
            <img
              className="logo-white"
              src="./images/logo-white.svg"
              alt="footer logo"
            />
            <div className="grid col-5 social-icons">
              <img src="./images/icon-facebook.svg" alt="facebook icon" />
              <img src="./images/icon-youtube.svg" alt="youtube icon" />
              <img src="./images/icon-twitter.svg" alt="twitter icon" />
              <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
              <img src="./images/icon-instagram.svg" alt="instagram icon" />
            </div>
          </div>
          <div className="grid  footer-menu">
            <div className="grid col-1 left footer-menu-1 ">
              <ul id="menu" className="">
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./">Pricing</a>
                </li>
                <li>
                  <a href="./">Products</a>
                </li>
                <li>
                  <a href="./">About Us</a>
                </li>
              </ul>
            </div>

            <div className="grid col-1 left footer-menu-1">
              <ul id="menu" className="">
                <li>
                  <a href="./">Careers</a>
                </li>
                <li>
                  <a href="./">Community</a>
                </li>
                <li>
                  <a href="./">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid col-1 right footer-updates">
            <div className="grid col-2-1fr-min">
              <input
                type="text"
                className="btn btn-white"
                placeholder="Updates in your inbox"
              ></input>
              <a className="btn btn--primary footer-btn" href="./">
                Go
              </a>
            </div>

            <p className="p-sm footer-copyright">
              Copyright 2020 All Rights Reserved
            </p>
          </div>
          <p className="p-sm footer-copyright-mobile">
            Copyright 2020 All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
