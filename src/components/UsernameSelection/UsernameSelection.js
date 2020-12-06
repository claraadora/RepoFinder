import React, {useState, useEffect} from "react";

//Drop down menu for selecting users
const UsernameSelection = ({ username, setUsername }) => {
  const [currValue, setCurrValue] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUsername(currValue); 
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{color: "black"}}>GitHub Project Finder</h1>
          <h3> Enter a username: </h3>
          <input type="text" value={currValue} onChange={e => setCurrValue(e.target.value)}/>
          <button>Submit</button>
      </form>
    </div>
  );
};

export default UsernameSelection;