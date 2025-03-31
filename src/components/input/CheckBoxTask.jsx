import { useId, useState } from "react";
import { TASK_STATUS } from "../../store/project-management-context";

export default function CheckBoxTask({ task, onCompleted, ...props }) {
  const styles = `size-4 p-2 my-1 mx-2 rounded border-2 border-b-4 border-stone-400
      bg-stone-100 text-stone-700 focus:outline-none focus:bg-stone-50 focus:border-solid focus:border-purple-800
      accent-violet-300 hover:accent-violet-500 dark:accent-violet-500 hover:accent-violet-700`;
  
  const status = task.status;
  const [ isSelected, setIsSelected ] = useState(status === TASK_STATUS.COMPLETED);
  
  function onChange() {
    if (isSelected) {
      window.alert("You cannot undo a task. Create another one to restart.");
      return;
    }
    setIsSelected(clicked => {
      return !clicked;
    });
    task.status = TASK_STATUS.COMPLETED;
  };

  const checkboxId = useId();

  return <div className="flex justify-start items-start font-momo">
    <input {...props}
        id={checkboxId}
        type="checkbox"
        onChange={onChange}
        checked={isSelected}
        className={styles} />
    <label className={isSelected ? " line-through" : ""} htmlFor={checkboxId} >
      {task.description}
    </label>
  </div>
}