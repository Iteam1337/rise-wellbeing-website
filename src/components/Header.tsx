import React from "react";
import { Link } from "react-router-dom";
import backArrowIcon from "../assets/back_arrow.svg";
import loopLogo from "../assets/loop_logo.svg";

const Header = ({ shrink = false }: { shrink?: boolean }) => {
  if (shrink) {
    return (
      <header className="flex items-center h-16 mx-auto">
        <Link to="/" title="Gå till startsidan">
          <img
            src={backArrowIcon}
            alt="An arrow pointing to the left"
            className="w-auto h-full pl-4"
          />
        </Link>
        <img
          className="ml-auto h-full w-auto"
          src={loopLogo}
          alt="Three o's in the Loop-logotype"
        />
      </header>
    );
  } else {
    return (
      <Link to="/" title="Gå till startsidan">
        <img
          className="mx-auto"
          src={loopLogo}
          alt="Three o's in the Loop-logotype"
        />
      </Link>
    );
  }
};

export default Header;
