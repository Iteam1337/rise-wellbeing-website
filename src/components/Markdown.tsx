import React from "react";
import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4 } from "./Typography";

const Root = ({ children }: { children: React.ReactChild }) => (
  <div> {children} </div>
);

const pluckNonValidProps = ({
  tight: _tight,
  ordered: _ordered,
  ...props
}: any) => props;

/* NOTE: See https://github.com/rexxars/react-markdown#node-types for a reference of the nodes */
const markdownRenderer = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  paragraph: (props: any) => <p {...props} />,
  listItem: (props: any) => (
    <li className="pb-6 list-dp-icon pl-12" {...pluckNonValidProps(props)} />
  ),
  list: (props: any) => (
    <ul className="pt-6 list-none grid gap-2" {...pluckNonValidProps(props)} />
  ),
  root: Root,
  strong: (props: any) => (
    <span
      className="block text-base font-bold font-body md:text-lg"
      {...pluckNonValidProps(props)}
    />
  ),
};

export const Markdown = ({ text }: { text: string }) => (
  <ReactMarkdown renderers={markdownRenderer} source={text} />
);
