/**
 * Bootstrap Icons
 */

interface IconProps {
  size?: number;
  name: string;
  color?: string;
  className?: string;
}

export default function Icon(props: IconProps) {
  const { size } = props;

  return (
    <i
      className={`bi bi-${props.name} m-0 p-0 leading-none ${props.className}`}
      style={{
        fontSize: size ? size + "px" : "inherit",
        color: props.color || "inherit",
      }}
    />
  );
}
