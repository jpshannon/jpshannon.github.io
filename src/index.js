import React from 'react';
import ReactDOM from 'react-dom';
import Resume from "./Resume.js";
import jsonResume from "./joshua.resume.json";

ReactDOM.render(
	<Resume jsonResume={jsonResume} />,
	document.getElementById("root")
);