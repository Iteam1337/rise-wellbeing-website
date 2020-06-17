import React from "react";
import { H2 } from "./Typography";
import { Column, Container, Center, BackgroundColor, Spacing } from "./Layout";

export type ArticleProps = {
  title: string;
  text: string;
};

export const ArticleThumbnail = ({ title, text }: ArticleProps) => (
  <Container backgroundColor={BackgroundColor.Beige} spacing={Spacing.S}>
    <Center>
      <Column>
        <H2>{title}</H2>
        <p>{text}</p>
      </Column>
    </Center>
  </Container>
);
