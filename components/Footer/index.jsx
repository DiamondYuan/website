import React from 'react';
import Icon from '../icon';
import Logo from '../Logo';

export default () => (
  <section className="footer-section">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-lg-2 col-md-3 ">
          <Logo></Logo>
        </div>
        <div className="col-lg-6 col-md-6  offset-lg-1">
          <ul className="nav footer-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {' '}
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 offset-lg-1">
          <ul className="footer-social-list">
            <li>
              <a href>
                <Icon type="github"></Icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>©2019 All right reserved. </p>
      </div>
    </div>
  </section>
);
