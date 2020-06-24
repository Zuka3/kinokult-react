import React from "react";
import logo from "../../img/logo.png";

export default function Header() {
  return (
    <header className="my-3">
      <div className="container">
        <div className="row header-row">
          <div className="col-sm-3 col-6 text-right">
            <a href="/" className="mr-5">
              <img src={logo} alt="logo" width="100" />
            </a>
          </div>
          <div className="col-sm-6 quote-block">
            <blockquote>
              <p>
                <i>
                  „Great works of art are only great because they are accessible
                  and comprehensible to everyone.“
                </i>
                <br />

                <span className="d-block text-right mr-5 pr-5">
                  - Leo Tolstoy
                </span>
              </p>
            </blockquote>
          </div>

          <div className="text-right col-sm-3 col-6">
            <div>
              <a href="index.php?lang=en" className="mr-2">
                eng
              </a>
              /
              <a href="index.php?lang=ru" className="ml-2">
                ru
              </a>
            </div>
            <div className="mt-3">
              <a href="https://www.facebook.com/KINOiKULT/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook mr-2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kinokultfilms/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
