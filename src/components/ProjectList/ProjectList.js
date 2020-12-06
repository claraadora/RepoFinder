import React from "react";

const ProjectList = ({ projects, setProject }) => {
  return (
    <div>
      <h3 style={{color: "blueviolet"}}>Project List</h3>
      { 
        projects != null && projects.length 
          ? projects.map(row => <a onClick={() => setProject(row.name)}>{row.name}</a>)
          : <h5>No project found</h5>
      }
    </div>
  );
};

export default ProjectList;

