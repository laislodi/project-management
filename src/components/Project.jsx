
import { FormattedDate } from "./text/FormattedDate";
import { H1, H3 } from "./text/Headers";
import Tasks from "./Tasks";
import { CloseIconButton, DeleteIconButton } from "./buttons/IconButton";

export default function Project({project, onClose, onDelete}) {
  return (
    <div className="w-3/4 px-5 flex flex-col justify-start items-center my-10 mx-auto">
      <header className="w-full">
        <div className="flex w-full justify-between items-center">
          <H1>{project.title}</H1>
          <div>
            <DeleteIconButton helpText={"Delete Project"} onDelete={onDelete}/>
            <CloseIconButton onClose={onClose} />
          </div>
        </div>
        <H3>Due Date: <FormattedDate date={project.dueDate}/></H3>
        <p className="text-md my-1 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={project.tasks} />
    </div>
  );
};
