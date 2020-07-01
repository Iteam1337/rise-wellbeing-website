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
  <h3 className="text-xl font-title md:text-2xl"> {children} </h3>
);

export const H4 = ({ children }: HeadingProps) => (
  <h4 className="text-lg font-title md:text-xl"> {children} </h4>
);

export const Leading = ({ children }: HeadingProps) => (
  <p className="pb-6 text-base font-bold font-body md:text-lg md:pb-8">
    {" "}
    {children}{" "}
  </p>
);

export const Strong = ({ children }: HeadingProps) => (
  <span className="inline-block pb-6 text-base font-bold font-body md:text-lg md:pb-8">
    {children}
  </span>
);
