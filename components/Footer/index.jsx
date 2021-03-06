import React from 'react';
import Icon from '../icon';
import Logo from '../Logo';
import { GithubUrl, contactUrl } from '../../common';
import trackEvent from '../../common/event';
import { i18n } from '../../i18n';
import { withTranslation } from '../../i18n';

export default withTranslation('common')(({ t }) => (
  <section className="footer-section">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-lg-2 col-md-3 ">
          <Logo></Logo>
        </div>
        <div className="col-lg-6 col-md-6  offset-lg-1">
          <ul className="nav footer-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={contactUrl}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={GithubUrl}>
                {t('sourcecode')}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 offset-lg-1">
          <ul className="footer-social-list">
            <li>
              <a
                href={GithubUrl}
                onClick={() => {
                  trackEvent('view source code', {
                    page: 'Footer',
                  });
                }}
              >
                <Icon type="github"></Icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p onClick={() => i18n.changeLanguage(i18n.language === 'cn' ? 'en' : 'cn')}>©2020 All right reserved. </p>
      </div>
    </div>
  </section>
));
