import { useContext, useRef } from "react";
import PrimaryButton from "./buttons/PrimaryButton.jsx";
import SecondaryButton from "./buttons/SecondaryButton.jsx";
import Modal from "./modal/Modal.jsx";
import Paragraph from "./text/Paragraph.jsx";
import { H2 } from "./text/Headers.jsx";
import InputText from "./input/InputText.jsx";
import { ProjectsContext } from "../store/project-management-context.jsx";
import { Link } from "react-router-dom";


function NewProject() {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const { onAdd } = useContext(ProjectsContext);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescriptions = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === "" || enteredDescriptions.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
      return;
    }
    
    onAdd({
      title: enteredTitle,
      description: enteredDescriptions,
      dueDate: enteredDueDate,
      tasks: []
    })
  }

  return <>
    <Modal ref={modal} >
      <H2>Invalid Input</H2>
      <Paragraph>Oops... Looks like you forgot to enter a value.</Paragraph>
      <Paragraph>Please make sure you provide a valid value for every input field.</Paragraph>
    </Modal>
    <div className="flex-row mx-4 w-2/3">
      <menu className="flex justify-end gap-8 font-bold my-4">
        <li>
          <Link to="/project-management">
            <SecondaryButton >
              Cancel
            </SecondaryButton>
          </Link>
        </li>
        <li>
          <PrimaryButton onClick={handleSave}>
            Save
          </PrimaryButton>
        </li>
      </menu>
      <div className="flex flex-col gap-4">
        <InputText ref={title} label="Title" uppercase />
        <InputText ref={description} label="Description" isTextarea uppercase />
        <InputText ref={dueDate} label="Due Date" type="date" uppercase />
      </div>
    </div>
  </>
};

export default NewProject;