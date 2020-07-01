import React from "react";
import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4, Strong } from "./Typography";
// import { LinkButton } from "./Button";

const Root = ({ children }: { children: React.ReactChild }) => (
  <div> {children} </div>
);

const markdownRenderer = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  root: Root,
  strong: Strong,
};

export const Markdown = ({ text }: { text: string }) => (
  <ReactMarkdown renderers={markdownRenderer} source={text} />
);
