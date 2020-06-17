import React from "react";
import { Container, Spacing } from "./Layout";

export enum BackgroundColor {
  Beige = "beige",
}

const backgroundColorToTailwindProps = (
  backgroundColor: BackgroundColor
): string => {
  const mapper = {
    beige: "bg-beige",
  };

  return mapper?.[backgroundColor] || mapper.beige;
};

export type CardProps = {
  backgroundColor?: BackgroundColor;
  children: React.ReactChild[] | React.ReactChild;
};

export const Card = ({
  backgroundColor = BackgroundColor.Beige,
  children,
}: CardProps) => (
  <Container spacing={Spacing.M}>
    <div
      className={`h-full w-full ${backgroundColorToTailwindProps(
        backgroundColor
      )}`}
    >
      {children}
    </div>
  </Container>
);
