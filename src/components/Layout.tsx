import React from "react";

export enum Spacing {
  None = "none",
  S = "small",
  M = "medium",
  L = "large",
}

const spacingToTailwindProps = (spacing: Spacing): string => {
  const mapper = {
    none: "p-0",
    small: "p-4 md:p-6",
    medium: "p-8 md:p-12",
    large: "p-12 md:p-16",
  };

  return mapper?.[spacing] || mapper.none;
};

export enum BackgroundColor {
  Beige = "beige",
  Transparent = "transparent",
}

const backgroundColorToTailwindProps = (
  backgroundColor: BackgroundColor
): string => {
  const mapper = {
    transparent: "bg-transparent",
    beige: "bg-beige",
  };

  return mapper?.[backgroundColor] || mapper.transparent;
};

export type ContainerProps = {
  backgroundColor?: BackgroundColor;
  spacing?: Spacing;
  children: JSX.Element[] | JSX.Element;
};

export const Container = ({
  backgroundColor = BackgroundColor.Transparent,
  spacing = Spacing.None,
  children,
}: ContainerProps) => (
  <div
    className={`container mx-auto ${spacingToTailwindProps(
      spacing
    )} ${backgroundColorToTailwindProps(backgroundColor)}`}
  >
    {children}
  </div>
);

const gapToTailwindProps = (spacing: Spacing): string => {
  const mapper = {
    none: "gap-0",
    small: "gap-4",
    medium: "gap-8",
    large: "gapp-12",
  };

  return mapper?.[spacing] || mapper.none;
};

export type ColumnProps = {
  gap?: Spacing;
  cols?: number;
  colsDesktop?: number;
  children: JSX.Element[] | JSX.Element;
};

export const Column = ({
  cols = 1,
  colsDesktop = 1,
  children,
  gap = Spacing.S,
}: ColumnProps) => (
  <div
    className={`grid grid-cols-${cols.toString()} md:grid-cols-${colsDesktop.toString()} ${gapToTailwindProps(
      gap
    )}`}
  >
    {children}
  </div>
);

export type RowProps = {
  gap?: Spacing;
  rows?: number;
  children: JSX.Element[] | JSX.Element;
};

export const Row = ({ rows = 2, children, gap = Spacing.S }: RowProps) => (
  <div
    className={`grid grid-rows-${rows.toString()} ${gapToTailwindProps(gap)}`}
  >
    {children}
  </div>
);

export const Center = ({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => <div className={`text-center justify-center`}>{children}</div>;
