import React from "react";
import { Link } from "react-router-dom";
import loopLogo from "../assets/loop_logo.svg";

export const Logo = () => (
  <Link to="/" title="Gå till startsidan">
    <img
      className="mx-auto"
      src={loopLogo}
      alt="Three o's in the Loop-logotype"
    />
  </Link>
);
