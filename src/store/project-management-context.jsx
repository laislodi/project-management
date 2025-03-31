import { createContext } from "react";
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
    selectedProjectId: undefined,
    action: ACTION.NOT_SELECTED,
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
    onStartAddProject: () => {},
    onSelectProject: () => {},
    onClose: () => {},
    onDelete: () => {},
    onAdd: () => {},
    onCancel: () => {},
  }
);