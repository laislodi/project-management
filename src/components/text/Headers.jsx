
export function H1({ children, props }) {
  return (
    <h1 {...props} className="text-4xl font-bold my-3 text-stone-800 dark:text-stone-200">
      {children}
    </h1>
  )
};

export function H2({ children, props }) {
  return (
    <h2 {...props} className="text-2xl font-bold my-3 text-stone-800 dark:text-stone-200">
      {children}
    </h2>
  )
};

export function H3({ children, props }) {
  return (
    <h3 {...props} className="text-xl font-bold my-2 text-stone-800 dark:text-stone-200">
      {children}
    </h3>
  )
};
