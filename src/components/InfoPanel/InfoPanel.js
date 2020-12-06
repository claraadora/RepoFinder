import React from "react";

const InfoPanel = ({ username, project }) => {
    if (username) {
        return (
            <section>
            <h4>You are viewing <span style={{color: "blueviolet"}}>{username}'s</span> projects.</h4>
            {
                project
                    ? <h4>Specifically, the <span style={{color: "blue"}}>{project} </span>project.</h4>
                    : <h4>Click a project in the project list to view its README.</h4>
            }
            </section>
        )
    }
    
    return <h5>Enter an account to start</h5>
};

export default InfoPanel;
