import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //doing NOTHING
    projects:[]
  })

  function handleAddProject(){
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null, // adding a NEW PRPJECT
      }
    })
  }

  function handleOnAdd(projectData){
    setProjectState((prevData) => {
      const id = Math.random()
      return {
        ...prevData,
        selectedProjectId: id,
        projects: [...prevData.projects,{
          ...projectData,
          id: id
        }]
      }
    })
  }

  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projectState.projects} onStartAdd={handleAddProject}/>
        {projectState.selectedProjectId === null && <NewProject onAdd={handleOnAdd}/>}
        {projectState.selectedProjectId === undefined && <NoProjectSelected  onStartAdd={handleAddProject}/>}
        
      </main>
  );
}

export default App;
