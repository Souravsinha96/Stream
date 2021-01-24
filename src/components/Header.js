import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <i className="twitch large icon"></i>
        <strong>Streamz</strong>
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          <p>All Streams</p>
        </Link>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
