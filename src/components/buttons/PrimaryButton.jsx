import Button from "./Button.jsx";

export default function PrimaryButton({ children, ...props }) {
  const classes = `bg-stone-800 border-2 border-stone-500 text-stone-200
        hover:border-stone-800 hover:bg-stone-700 hover:text-stone-50
        dark:bg-stone-200 dark:text-stone-700 dark:border-stone-700
        dark:hover:bg-stone-100 dark:hover:text-stone-900 dark:hover:border-stone-900 `;
  
  return (
    <Button {...props}
      className={classes.concat(props.className ?? "")}
    >
      {children}
    </Button>
  );
}