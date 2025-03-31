import { useContext, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import ProjectMenu from "./components/ProjectMenu";
import { v4 } from "uuid";
import { ACTION, ProjectsContext } from "./store/project-management-context";

export default function Home() {
  const context = useContext(ProjectsContext);
  const [ projectState, setProjectState ] = useState({
    projects: context.projects,
    selectedProjectId: context.selectedProjectId,
    action: ACTION.NOT_SELECTED
  });

  function handleStartAddProject() {
    setProjectState(prevState => ({
      ...prevState,
      action: ACTION.ADDING,
      selectedProjectId: undefined
    }));
  };

  function handleCloseProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      action: ACTION.NOT_SELECTED
    }));
  };

  function handleDeleteProject() {
    const filteredProjects = context.projects.filter(project => project.id !== projectState.selectedProjectId);
    setProjectState({
      selectedProjectId: undefined,
      action: ACTION.NOT_SELECTED,
      projects: [...filteredProjects]
    });
  }

  function handleCancelingAddProject() {
    setProjectState(prevState => ({
      ...prevState,
      action: ACTION.NOT_SELECTED
    }));
  };

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: v4()
    };
    setProjectState(prevState => ({
      selectedProjectId: newProject.id,
      projects: [...prevState.projects, newProject ],
      action: ACTION.SELECTED
    }));
  };

  function handleSelectProject(projectId) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: projectId,
      action: ACTION.SELECTED
    }));
  };

  let content = <NoProjectSelected />;
  if (projectState.action === ACTION.ADDING) {
    content = <NewProject />
  } else if (projectState.action === ACTION.SELECTED) {
    content = <Project />
  }

  const projectsContext = {
    projects: projectState.projects,
    selectedProjectId: projectState.selectedProjectId,
    action: projectState.action,
    onStartAddProject: handleStartAddProject,
    onSelectProject: handleSelectProject,
    onClose: handleCloseProject,
    onDelete: handleDeleteProject,
    onAdd: handleAddProject,
    onCancel: handleCancelingAddProject,
  };

  return (
    <ProjectsContext.Provider
      value={projectsContext}
      className="w-[100vw] min-h-[100vh]
        bg-slate-200 text-slate-800
        dark:bg-slate-700 dark:text-slate-100">
      <ProjectMenu />
      {content}
    </ProjectsContext.Provider>
  );
};
