import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

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

  function handleCancelAddProject(){
    setProjectState((prevData) => {
      return {
        ...prevData,
        selectedProjectId : undefined
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

  function handleSelectProject(id){
    setProjectState((prevData) => {
      return {
        ...prevData,
        selectedProjectId : id
      }
    })
  }
  const selectedProject = projectState.projects.find(item => item.id === projectState.selectedProjectId)
  return (
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projectState.projects} onStartAdd={handleAddProject} onSelectProject={handleSelectProject}/>
        {projectState.selectedProjectId != null && projectState.selectedProjectId != undefined && <SelectedProject project={selectedProject}/>}
        {projectState.selectedProjectId === null && <NewProject onAdd={handleOnAdd} onCancel={handleCancelAddProject}/>}
        {projectState.selectedProjectId === undefined && <NoProjectSelected  onStartAdd={handleAddProject}/>}
        
      </main>
  );
}

export default App;
