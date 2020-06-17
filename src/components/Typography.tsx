import React from "react";

export type HeadingProps = {
  children: React.ReactChild | React.ReactChildren;
};

export const H1 = ({ children }: HeadingProps) => (
  <h1 className="text-3xl font-title md:text-4xl"> {children} </h1>
);

export const H2 = ({ children }: HeadingProps) => (
  <h2 className="text-2xl font-title md:text-3xl"> {children} </h2>
);

export const H3 = ({ children }: HeadingProps) => (
  <h3 className="font-title text-xl md:text-2xl"> {children} </h3>
);
