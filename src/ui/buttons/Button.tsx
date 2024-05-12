import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import { Variants } from "~/constants/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  mode?: "outline" | "contain";
  shape?: "rounded" | "pill" | "none";
  size?: "sm" | "md" | "lg";
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    mode = "contain",
    shape = "rounded",
    size = "md",
    ...rest
  } = props;

  const btnVariant = React.useMemo(
    () => (mode === "contain" ? `btn-${variant}` : `btn-${variant}-outline`),
    [variant, mode],
  );

  const btnSize = React.useMemo(
    () => (size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "btn"),
    [size],
  );

  const btnShape = React.useMemo(
    () =>
      shape === "pill"
        ? "rounded-full px-10"
        : shape === "rounded"
          ? `rounded-${size}`
          : "",
    [shape, size],
  );

  return (
    <button
      {...rest}
      className={clsx(btnSize, btnVariant, btnShape, props.className)}
      type={"button"}
    >
      {props.children}
    </button>
  );
}
