import React from "react";
import { Markdown } from "./Markdown";
import { H2, Strong } from "./Typography";
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
  image?: string;
  text: string;
  title: string;
  url: string;
  id: string;
  video?: string;
};

const getAttachedAsset = (
  maybeImage?: string,
  maybeVideo?: string
): JSX.Element => {
  let maybeAttachedAsset: JSX.Element;

  /* Lets just prioritise video's over images */
  if (maybeVideo) {
    maybeAttachedAsset = (
      <video controls className="w-full h-auto">
        <source src={maybeVideo} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  } else if (maybeImage) {
    maybeAttachedAsset = (
      <img
        className="w-full h-auto"
        src={`${process.env.REACT_APP_API_ENDPOINT}${maybeImage}`}
        alt=""
      />
    );
  } else {
    maybeAttachedAsset = <React.Fragment />;
  }

  return maybeAttachedAsset;
};

export const FeaturedArticleThumbnail = ({
  image,
  introduction,
  text,
  title,
  url,
  video,
}: ArticleProps & { introduction: string }) => {
  return (
    <Wrapper backgroundColor={BackgroundColor.Beige} spacing={Spacing.None}>
      <Container>
        <Column gap={Spacing.None}>
          <Container spacing={Spacing.S}>
            <Column gap={Spacing.M}>
              <Center>
                <H2>{title}</H2>
              </Center>
              <Strong>{introduction}</Strong>
              <Markdown text={text} />
            </Column>
          </Container>
          {getAttachedAsset(image, video)}
          <Container spacing={Spacing.S}>
            <Column>
              <LinkButton to={url} text="Spela video" />
            </Column>
          </Container>
        </Column>
      </Container>
    </Wrapper>
  );
};

export const ArticleThumbnail = ({
  image,
  text,
  title,
  url,
  video,
}: ArticleProps) => {
  return (
    <Wrapper backgroundColor={BackgroundColor.Beige} spacing={Spacing.None}>
      <Container>
        <Column gap={Spacing.None}>
          <Container spacing={Spacing.S}>
            <Center>
              <H2>{title}</H2>
            </Center>
          </Container>
          {getAttachedAsset(image, video)}
          <Container spacing={Spacing.S}>
            <Column>
              <Markdown text={text} />
              <LinkButton to={url} text="Läs mer" />
            </Column>
          </Container>
        </Column>
      </Container>
    </Wrapper>
  );
};
