import clsx from "clsx";
import { ReactNode, useCallback, useMemo } from "react";
import { Variants } from "~/constants/types";
import Icon from "../icon/Icon";

type AlertProps = {
  variant?: Variants;
  children?: ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
  iconPosition?: "start" | "center";
  iconSize?: number;
  iconName?:
    | "x-circle"
    | "dash-circle"
    | "plus-circle"
    | "question-circle"
    | "exclamation-triangle"
    | "info-circle"
    | "check-circle";
  size?: "sm" | "md" | "lg";
};

export default function Alert(props: AlertProps) {
  const {
    variant = "info",
    showIcon = true,
    size = "md",
    iconPosition = "center",
    iconSize = 22,
  } = props;

  const alertVariant = useMemo(
    () =>
      `bg-${variant}-container text-on-${variant}-container border border-${variant}`,
    [variant],
  );
  const alertSize = useMemo(() => `p-${size}`, [size]);
  const alertIcon = useMemo(
    () => (showIcon ? `flex gap-3 flex-row items-${iconPosition}` : ``),
    [iconPosition, showIcon],
  );

  const AlertIcon = useCallback(
    () =>
      showIcon ? (
        <Icon
          className={props.iconClassName}
          name={
            props.iconName
              ? props.iconName
              : variant === "info"
                ? "info-circle"
                : variant === "error"
                  ? "x-circle"
                  : variant === "success"
                    ? "check-circle"
                    : variant === "warning"
                      ? "exclamation-triangle"
                      : variant === "secondary"
                        ? "question-circle"
                        : variant === "primary"
                          ? "plus-circle"
                          : "dash-circle"
          }
          size={iconSize}
        />
      ) : null,
    [showIcon, iconSize, props.iconName, props.iconClassName, variant],
  );

  return (
    <div
      className={clsx(
        "text-base font-medium",
        alertVariant,
        alertSize,
        alertIcon,
        props.className,
      )}
    >
      <AlertIcon />
      <div className="grow">{props.children}</div>
    </div>
  );
}
