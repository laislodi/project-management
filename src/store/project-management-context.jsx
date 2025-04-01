import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const TASK_STATUS = {
  COMPLETED: "completed",
  IN_PROGRESS: "in progress"
}

export const ACTION = {
  NOT_SELECTED: "not-selected",
  SELECTED: "selected",
  ADDING: "adding"
}

export const ProjectsContext = createContext(
  {
    projects: [
      {
        id: v4(),
        title: "Learning React",
        dueDate: new Date("2025-01-17T03:24:00"),
        description: "Learn React from the group up.\n\nStart with the basics.",
        tasks: [
          {
            id: "3edc-4rfv",
            description: "Learn the basics",
            status: TASK_STATUS.COMPLETED
          },
          {
            id: "5tgb-6yhn",
            description: "Learn useEffect and useRef",
            status: TASK_STATUS.IN_PROGRESS
          },
          {
            id: "7ujm-8ikm",
            description: "Build a project on my own",
            status: TASK_STATUS.IN_PROGRESS
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
            status: TASK_STATUS.COMPLETED
          },
          {
            id: "5t6y-gbhn",
            description: "Master useEffect and useRef",
            status: TASK_STATUS.IN_PROGRESS
          },
          {
            id: "7u8i-jmkm",
            description: "Build a new and more complex project on my own",
            status: TASK_STATUS.IN_PROGRESS
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
    ],
    onDelete: () => {},
    onAdd: () => {},
  }
);

export default function ProjectsContextProvider({ children }) {
  const context = useContext(ProjectsContext);
  const [ projects, setProjects ] = useState(context.projects);
  const navigate = useNavigate();

  function handleDeleteProject(id) {
    const filteredProjects = context.projects.filter(project => project.id !== id);
    setProjects([...filteredProjects]);
    navigate("/");
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: v4()
    };
    setProjects([...projects, newProject ]);
    navigate(`/${newProject.id}`);
  };

  const projectsContext = {
    projects: projects,
    onDelete: handleDeleteProject,
    onAdd: handleAddProject,
  };

  return (
    <ProjectsContext.Provider
        value={projectsContext}>
            {children}
    </ProjectsContext.Provider>
  )
};
