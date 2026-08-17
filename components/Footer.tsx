'use client';

import { GramBrand, NavadrishtiBrand } from '@/components/Platform';
import {
  PLATFORM_APP_URL,
  PLATFORM_LOGO,
  PLATFORM_PAGE_PATH,
} from '@/constants';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="footer-mark">Navadrishti LLP</p>
            <p className="footer-tagline">Consultation & Technology</p>
            <p className="footer-established">Established 2025</p>
            <a className="footer-email" href="mailto:connect@navadrishti.in">
              connect@navadrishti.in
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link href="/" className="footer-brand-link">
                    <NavadrishtiBrand />
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-brand-link"
                    href={PLATFORM_PAGE_PATH}
                    aria-label="GRAM product page"
                  >
                    <GramBrand />
                  </Link>
                </li>
                <li>
                  <a
                    className="footer-brand-link footer-open-app-link"
                    href={PLATFORM_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-open-gram-app">
                      Open
                      <img
                        src={PLATFORM_LOGO}
                        alt=""
                        className="gram-brand-logo"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                      />
                      GRAM App
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Follow</h3>
              <ul className="footer-social">
                <li>
                  <a
                    href="https://www.linkedin.com/company/navadrishti/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/navadrishti.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright © {currentYear} Navadrishti LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
