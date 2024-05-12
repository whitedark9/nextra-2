import clsx from "clsx";
import { Variants } from "~/constants/types";

interface DividerProps {
  className?: string;
  variant?: Variants;
}

export default function Divider(props: DividerProps) {
  const { variant = "neutral" } = props;

  return <hr className={clsx(`border-${variant} my-5`, props.className)} />;
}
