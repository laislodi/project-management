import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import ProjectMenu from "./components/ProjectMenu";
import { v4 } from "uuid";

export const STATUS = {
  COMPLETED: "completed",
  IN_PROGRESS: "in progress"
}

const ACTION = {
  NOT_SELECTED: "not-selected",
  SELECTED: "selected",
  ADDING: "adding"
}

const oldProjects = [
  {
    id: v4(),
    title: "Learning React",
    dueDate: new Date("2025-01-17T03:24:00"),
    description: "Learn React from the group up.\n\nStart with the basics.",
    tasks: [
      {
        id: "3edc-4rfv",
        description: "Learn the basics",
        status: STATUS.COMPLETED
      },
      {
        id: "5tgb-6yhn",
        description: "Learn useEffect and useRef",
        status: STATUS.IN_PROGRESS
      },
      {
        id: "7ujm-8ikm",
        description: "Build a project on my own",
        status: STATUS.IN_PROGRESS
      }
    ]
  },
  {
    id: v4(),
    title: "Mastering React",
    dueDate: new Date("2025-02-08T12:32:00"),
    description: "Mastering React from the group up.\n\nStart with the basics, finish with advanced knowledge.",
    tasks: [
      {
        id: "3e4r-dcfv",
        description: "Master the basics",
        status: STATUS.COMPLETED
      },
      {
        id: "5t6y-gbhn",
        description: "Master useEffect and useRef",
        status: STATUS.IN_PROGRESS
      },
      {
        id: "7u8i-jmkm",
        description: "Build a new and more complex project on my own",
        status: STATUS.IN_PROGRESS
      }
    ]
  },
  {
    id: v4(),
    title: "Hacking React",
    dueDate: new Date("2025-05-17T03:24:00"),
    description: "Be a React expert!",
    tasks: []
  }
];

export default function Home() {
  const [ projectsState, setProjectsState ] = useState({
    action: ACTION.NOT_SELECTED,
    selectedProjectId: undefined,
    projects: oldProjects
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        action: ACTION.ADDING,
      }
    });
  };

  function handleCloseProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        action: ACTION.NOT_SELECTED,
        selectedProjectId: undefined,
      }
    })
  };

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId
        ),
        action: ACTION.NOT_SELECTED,
        selectedProjectId: undefined
      }
    })
  }

  function handleCancelingAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        action: ACTION.NOT_SELECTED
      }
    });
  };

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: v4()
      };
      return {
        action: ACTION.SELECTED,
        selectedProjectId: newProject.id,
        projects: [ ...prevState.projects, newProject ]
      }
    })
  };

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        action: ACTION.SELECTED,
        selectedProjectId: projectId
      }
    })
  };

  let content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  if (projectsState.action === ACTION.ADDING) {
    content = <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelingAddProject} 
              />
  } else if (projectsState.action === ACTION.SELECTED) {
    let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    
    content = <Project
          project={selectedProject}
          onClose={handleCloseProject}
          onDelete={handleDeleteProject}
    />
  }

  return (
    <div className="flex justify-start w-[100vw] min-h-[100vh] pr-8 pt-8
        bg-slate-200 text-slate-800
        dark:bg-slate-700 dark:text-slate-100">
      <ProjectMenu
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        selectProjectId={projectsState.selectedProjectId}
      />
      {content}
    </div>
  );
};
