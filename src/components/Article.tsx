import React from "react";
import { H2 } from "./Typography";
import { LinkButton } from "./Button";
import {
  Column,
  Container,
  Wrapper,
  Center,
  BackgroundColor,
  Spacing,
} from "./Layout";

export type ArticleProps = {
  title: string;
  text: string;
};

export const ArticleThumbnail = ({ title, text }: ArticleProps) => (
  <Wrapper backgroundColor={BackgroundColor.Beige} spacing={Spacing.S}>
    <Container>
      <Center>
        <Column>
          <H2>{title}</H2>
          <p>{text}</p>
          <LinkButton to="" text="Läs mer" />
        </Column>
      </Center>
    </Container>
  </Wrapper>
);
