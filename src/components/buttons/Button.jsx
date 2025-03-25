export default function Button({ children, ...props }) {
  return (
    <button {...props}
        className={"text-md md:text-base font-medium rounded-md p-2 m-1 min-w-32 ".concat(props.className ?? "")}>
      {children}
    </button>
  );
}
