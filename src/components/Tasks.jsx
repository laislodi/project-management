import { useRef, useState } from "react";
import CheckBoxTask from "./input/CheckBoxTask.jsx";
import { H2 } from "./text/Headers.jsx";
import InputText from "./input/InputText.jsx";
import { CloseIconButton, ConfirmIconButton, PlusIconButton } from "./buttons/IconButton";
import { STATUS } from "../store/project-management-context.jsx";
import { v4 } from "uuid";

export default function Tasks({ tasks }) {
  const [ addingTask, setAddingTask ] = useState(false);
  const newTaskRef = useRef();
  
  function handleSaveNewTask() {
    const taskDescription = newTaskRef.current.value;
    if (taskDescription.trim() === "") {
      return
    }
    tasks.push({
      id: v4(),
      description: taskDescription,
      status: STATUS.IN_PROGRESS
    });
    setAddingTask(false);
  }
  
  function addTask() {
    setAddingTask(true);
  };

  function closeNewTask() {
    setAddingTask(false);
  }
  
  function onCompleted(taskId) {
    const currentTask = tasks.filter(task => task.id === taskId);
    currentTask.status = STATUS.COMPLETED;
  };
  
  return <section className="w-full bg-slate-300 dark:bg-slate-600 m-2 py-2 px-3 rounded-md">
    <div className="flex w-full justify-between items-center">
      <H2>Tasks ({tasks.length})</H2>
      {!addingTask ? <PlusIconButton onAdd={addTask} /> : <CloseIconButton onClose={closeNewTask} />}
    </div>
    <ul>
      {tasks.length === 0 ? 
        <p>This project does not have any tasks yet.</p> :
        tasks.map(task => <li key={task.id}>
          <CheckBoxTask task={task} onCompleted={onCompleted} />
        </li>)
      }
      { addingTask && <li className="flex items-center w-full mt-4">
        <InputText label={"New Task"} ref={newTaskRef} />
        <ConfirmIconButton onConfirm={handleSaveNewTask} />
      </li>}
    </ul>
  </section>
}