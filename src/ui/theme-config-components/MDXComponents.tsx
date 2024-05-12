import React from "react";
import Divider from "../divider/Divider";

export const Bold = ({ children }: { children?: React.ReactNode }) => (
  <strong className={`text-primary font-bold`}>{children}</strong>
);

export const Strikethrough = ({ children }: { children?: React.ReactNode }) => (
  <del className="text-error decoration-1">{children}</del>
);

export const Blockquote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className={"bg-info-container text-info"}>{children}</blockquote>
);

const MDXComponents = {
  strong: Bold,
  del: Strikethrough,
  blockquote: Blockquote,
  hr: Divider,
};

export default MDXComponents;
