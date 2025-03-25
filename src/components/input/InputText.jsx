export default function InputText({label, isTextarea, uppercase, ref, ...props}) {
  const inputStyles = `w-5/6 p-2 appearance-none rounded border-2 border-b-4 border-stone-400
      bg-stone-100 text-stone-700 focus:outline-none focus:bg-stone-50 focus:border-solid focus:border-purple-800`;
  
  let styles = "flex justify-between w-full items-center font-momo";
  if (uppercase) {
    styles = styles.concat(" uppercase");
  }

  return <p className={styles}>
    <label ref={ref} className="font-bold">{label}:</label>
    {isTextarea ? 
      <textarea ref={ref} className={inputStyles} {...props} /> : 
      <input ref={ref} className={inputStyles} {...props} /> 
    }
  </p>
}