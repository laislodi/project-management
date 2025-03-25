import Button from "./Button";

export default function SecondaryButton({ children, ...props }) {
  const classes = `bg-stone-300 border-2 border-stone-800 text-stone-800
        hover:bg-stone-200 hover:text-stone-900 hover:border-stone-800
        dark:bg-stone-600 dark:border-stone-200 dark:text-stone-200
        dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:hover:border-stone-100 `;
  
  return (
    <Button {...props}
      className={classes.concat(props.className ?? "")}
    >
      {children}
    </Button>
  );
}