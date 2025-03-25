import { Children } from "react";

export default function Paragraph({ children, props }) {
  return (
    <p {...props} className="mb-3 text-stone-700 dark:text-stone-100">
      {children}
    </p>
  )
};
