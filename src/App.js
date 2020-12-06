import React, { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import ProjectView from "./components/ProjectView/ProjectView";
import UsernameSelection from "./components/UsernameSelection/UsernameSelection";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import "./App.css";

const fetchProjects = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const json = await res.json();
    return json;
};

const fetchProject = async (username, project) => {
    const res = await fetch(
        `https://api.github.com/repos/${username}/${project}/readme`
    );
    const json = await res.json();
    return json;
};

const fetchProjectReadme = async (projectJson) => {
    if (projectJson && projectJson.download_url) {
        const res = await fetch(projectJson.download_url);
        const resString = await res.text(); 
        console.log(res); 
        console.log(resString); 
        return resString;
    }
    return null;
};

function App() {
    const [username, setUsername] = useState(null);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState(null);

    useEffect(() => {
        if (username != null) {
            const updateProjects = async () => {
                const json = await fetchProjects(username);
                setProjects(json);
                console.log(json);
            };
            updateProjects();
        }
    }, [username]);

    useEffect(() => {
        const updateProject = async () => {
            if (username != null && project != null) {
                const projectJson = await fetchProject(username, project);
                const projectReadme = await fetchProjectReadme(projectJson);
                setReadme(projectReadme);
            }
        };
        updateProject();
    }, [username, project]);

    return (
        <section>
            <UsernameSelection username={username} setUsername={setUsername} />
            <InfoPanel username={username} project={project}/>
            <h3 className='container'>
                <div className='left-panel'>
                    <ProjectList projects={projects} setProject={setProject} />
                </div>
                <div className='right-panel'>
                    <ProjectView readme={readme} />
                </div>
            </h3>
        </section>
    );
}

export default App;
