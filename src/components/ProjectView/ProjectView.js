import React from "react";
import Markdown from 'react-markdown';

const ProjectView = ({ readme }) => {
    return (
        <div>
        <h3 style={{color: "blue"}}>Project Readme</h3>
            {
            readme 
                ? <Markdown source={readme} />
                : <subtitle>No readme</subtitle>
            }
        </div>
    );
};

export default ProjectView;
