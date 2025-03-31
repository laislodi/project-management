// project:
// {
//   id: uuid
//   name: string
//   date: Date
//   description: string
//   tasks [{
//     id: uuid
//     description: string
//   }]
// }

import Button from "./buttons/Button";
import PrimaryButton from "./buttons/PrimaryButton";
import { ProjectsContext } from "../store/project-management-context";


function ProjectMenu({ onSelectProject, onStartAddProject }) {
  return (
    <ProjectsContext.Consumer>
      {(projectsCtx) => {
        return (
          <aside className="flex-row justify-items-start basis-xs
              w-1/3 md:w-72
              bg-slate-400 dark:bg-slate-900
              rounded-r-lg px-6 py-8 ">
            <h2 className="text-stone-900 dark:text-stone-50 md:text-2xl font-bold uppercase mb-4">
              Your Projects
            </h2>
            <div>
              <PrimaryButton onClick={onStartAddProject}>
                + Add Project
              </PrimaryButton>
            </div>
            <ul className="mt-4 w-full">
              {projectsCtx.projects.map(project => {
                let cssClasses = `w-full text-left hover:cursor-pointer
                        text-stone-800 hover:text-stone-900 hover:bg-slate-200
                        dark:text-stone-300 dark:hover:text-slate-300 dark:hover:bg-slate-600`;
                if (project.id === projectsCtx.selectedProjectId) {
                  cssClasses += " text-stone-700 bg-slate-300 dark:text-slate-200 dark:bg-slate-700";
                } else {
                  cssClasses += " text-stone-100 dark:text-stone-300";
                }

                return <li key={`${project.id}_${project.title}`} >
                  <Button
                    onClick={() => onSelectProject(project.id)}
                    className={cssClasses}>
                    {project.title}
                  </Button>
                </li>}
              )}
              </ul>
          </aside>
        )
      }}
    </ProjectsContext.Consumer>
  );
};

export default ProjectMenu;