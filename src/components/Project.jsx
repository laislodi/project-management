
import { FormattedDate } from "./text/FormattedDate";
import { H1, H3 } from "./text/Headers";
import Tasks from "./Tasks";
import { CloseIconButton, DeleteIconButton } from "./buttons/IconButton";
import { ProjectsContext } from "../store/project-management-context";


export default function Project() {
  return (
    <ProjectsContext.Consumer>
      {(projectsContext) => {
        const currentProject = projectsContext.projects.find(p => p.id === projectsContext.selectedProjectId);
        
        return (
          <div className="w-3/4 px-5 flex flex-col justify-start items-center my-10 mx-auto">
            <header className="w-full">
              <div className="flex w-full justify-between items-center">
                <H1>{currentProject.title}</H1>
                <div>
                  <DeleteIconButton helpText={"Delete Project"} onDelete={projectsContext.onDelete}/>
                  <CloseIconButton onClose={projectsContext.onClose} />
                </div>
              </div>
              <H3>Due Date: <FormattedDate date={currentProject.dueDate}/></H3>
              <p className="text-md my-1 whitespace-pre-wrap">{currentProject.description}</p>
            </header>
            <Tasks tasks={currentProject.tasks} />
          </div>
        );
      }}
    </ProjectsContext.Consumer>
  )
};
