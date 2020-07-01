import React from "react";

export enum Spacing {
  None = "none",
  XS = "xsmall",
  S = "small",
  M = "medium",
  L = "large",
}

const spacingToTailwindProps = (spacing: Spacing): string => {
  const mapper = {
    none: "p-0",
    xsmall: "p-2 md:p-4",
    small: "p-4 md:p-6",
    medium: "p-8 md:p-12",
    large: "p-12 md:p-16",
  };

  return mapper[spacing] || mapper.none;
};

export enum BackgroundColor {
  Beige = "beige",
  DarkBeige = "beige-dark",
  Transparent = "transparent",
  White = "white",
}

const backgroundColorToTailwindProps = (
  backgroundColor: BackgroundColor
): string => {
  const mapper = {
    white: "bg-white",
    transparent: "bg-transparent",
    "beige-dark": "bg-beige-dark",
    beige: "bg-beige",
  };

  return mapper[backgroundColor] || mapper.transparent;
};

export type ContainerProps = {
  spacing?: Spacing;
  children: JSX.Element[] | JSX.Element;
};

export const Container = ({
  spacing = Spacing.None,
  children,
}: ContainerProps) => (
  <div
    className={`container w-full mx-auto ${spacingToTailwindProps(spacing)}`}
  >
    {children}
  </div>
);

export type WrapperProps = {
  classNames?: string;
  backgroundColor?: BackgroundColor;
  spacing?: Spacing;
  children: JSX.Element[] | JSX.Element;
};

export const Wrapper = ({
  classNames = "",
  backgroundColor = BackgroundColor.Transparent,
  spacing = Spacing.None,
  children,
}: WrapperProps) => (
  <div
    className={`w-full mx-auto ${spacingToTailwindProps(
      spacing
    )} ${backgroundColorToTailwindProps(backgroundColor)} ${classNames}`}
  >
    {children}
  </div>
);

const gapToTailwindProps = (spacing: Spacing): string => {
  const mapper = {
    none: "gap-0",
    xsmall: "gap-2 md:gap-4",
    small: "gap-4 md:gap-6",
    medium: "gap-8 md:gap-10",
    large: "gap-12 md:gap-14",
  };

  return mapper[spacing] || mapper.none;
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
    className={`grid grid-cols-${rows.toString()} ${gapToTailwindProps(gap)}`}
  >
    {children}
  </div>
);

export const Center = ({
  children,
}: {
  children: React.ReactChild[] | React.ReactChild;
}) => <div className={`text-center justify-center`}>{children}</div>;
