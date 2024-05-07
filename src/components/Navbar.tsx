import React from "react";
// import { FaCartShopping } from "react-icons/fa6";
import { BsCart3, BsFileEarmarkTextFill   } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light p-2 d-flex">
      <a className="navbar-brand" href="/">
      <BsFileEarmarkTextFill className="mx-2" />
        TEFL Sheets
      </a>

      <div className="collapse navbar-collapse d-flex justify-content-end mw-30" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <a className="nav-link" href="/sheets">
              Sheets
            </a>
          </li>
        {/* </ul> */}
        {/* <ul className="navbar-nav "> */}
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              {/* <FaCartShopping /> */}
              <BsCart3 size="1.2em"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
