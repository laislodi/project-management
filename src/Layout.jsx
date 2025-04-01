import ProjectMenu from "./components/ProjectMenu";
import ProjectsContextProvider from "./store/project-management-context";
import { Outlet } from "react-router-dom";

export default function Layout() {
  

  return (
    <main className="h-screen flex justify-start pr-8 pt-8 ">
      <ProjectsContextProvider>
        <ProjectMenu />
        <Outlet />
      </ProjectsContextProvider>
    </main>
  );
};
