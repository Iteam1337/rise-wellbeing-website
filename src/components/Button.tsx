import React from "react";
import { Link } from "react-router-dom";

export type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => <button>{text}</button>;

export type LinkButtonProps = ButtonProps & {
  to: string;
};

export const LinkButton = ({ text, to }: LinkButtonProps) => (
  <Link
    className="px-4 py-1 uppercase text-sm border-2 border-black rounded-sm rounded-tr-lg rounded-bl-lg font-title justify-self-center transition duration-200 hover:bg-black hover:text-white"
    title={text}
    to={to}
  >
    {text}
  </Link>
);
