import { ReactNode } from "react";

export function Details({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="mt-4 rounded-md p-2 ps-3 last-of-type:mb-0">
      <summary>
        <strong className="text-md">{title}</strong>
      </summary>
      <div className="p-2 px-5">{children}</div>
    </details>
  );
}
