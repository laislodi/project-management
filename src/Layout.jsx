import ProjectMenu from "./components/ProjectMenu";
import ProjectsContextProvider from "./store/project-management-context";
import { Outlet } from "react-router-dom";

export default function Layout() {
  

  return (
    <main className="h-screen flex justify-start pr-8 pt-8 w-[100vw] min-h-[100vh]
         bg-slate-200 text-slate-800
         dark:bg-slate-700 dark:text-slate-100">
      <ProjectsContextProvider>
        <ProjectMenu />
        <Outlet />
      </ProjectsContextProvider>
    </main>
  );
};
