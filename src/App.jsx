import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";
import { ProjectNotFound } from "./components/ProjectNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<NoProjectSelected />} />
          <Route path="/new" element={<NewProject />} />
          <Route path="/:id" element={<Project />} />
        </Route>
        <Route path="/*" element={<ProjectNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
