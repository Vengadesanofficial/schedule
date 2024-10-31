import React, { useEffect, useState } from "react";
import "../content/content.css";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/projectAction";
import axios from "axios";



const Content = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedManager, setSelectedManager] = useState("");
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [estimation, setEstimation] = useState("");
 
const dispatch = useDispatch();
 useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://652419a7ea560a22a4e96c20.mockapi.io/projectschedule");
        dispatch(setProjects(response.data)); // Dispatch action to store fetched data
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [dispatch]);

  const handleAddProject = async () => {
    const projectData = {
      projectName,
      selectedManager,
      selectedResources: selectedButtons,
      startDate,
      endDate,
      estimation,
      status
    };

    dispatch(addProject(projectData));

    // Save to API
    await axios.post("https://652419a7ea560a22a4e96c20.mockapi.io/projectschedule", projectData);
    resetForm();
    setShowForm(false);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
    if (showForm) {
      resetForm();
    }
  };

  const handleManagerClick = (name) => {
    setSelectedManager(name);
  };

  const toggleButton = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== button));
    } else {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleEstimationChange = (event) => {
    setEstimation(event.target.value);
  };

  const resetForm = () => {
    setSelectedManager("");
    setSelectedButtons([]);
    setStartDate("");
    setEndDate("");
    setProjectName("");
    setEstimation("");
  };

  return (
    <div className="c-main">
      <div className="fill-add">
        <div className="sel">
          <select className="project-select">
            <option value="project1">All</option>
            <option value="project2">Project Name</option>
            <option value="project3">Project Manager</option>
            <option value="project4">Last Update</option>
            <option value="project5">Resources</option>
            <option value="project6">Estimation</option>
          </select>
          <input
            className="input"
            name="text"
            placeholder="Search..."
            type="search"
          ></input>
        </div>
        <div className="add-btn">
          <button onClick={toggleForm}>
            <span className="material-symbols-outlined">add</span>Add New
            Project
          </button>
          {showForm && (
            <div className="form-overlay">
              <div className="project-details">
                <h1>Add New Project</h1>
                <div className="p-name">
                  <h2>Project Name:</h2>
                  <input
                    className="input"
                    name="text"
                    placeholder="Enter"
                    type="search"
                    value={projectName}
                    onChange={handleProjectNameChange}
                  ></input>
                </div>
                {/* Project Manager Section */}
                <div className="p-manage">
                  <h2>Project Manager (pm)</h2>
                  <div className="manage-btn">
                    <button
                      onClick={() => handleManagerClick("Roger Vaccaro")}
                      className={
                        selectedManager === "Roger Vaccaro" ? "selected" : ""
                      }
                    >
                      Roger Vaccaro
                    </button>
                    <button
                      onClick={() => handleManagerClick("Tatiana Dias")}
                      className={
                        selectedManager === "Tatiana Dias" ? "selected" : ""
                      }
                    >
                      Tatiana Dias
                    </button>
                    <button
                      onClick={() => handleManagerClick("Leo Gouse")}
                      className={
                        selectedManager === "Leo Gouse" ? "selected" : ""
                      }
                    >
                      Leo Gouse
                    </button>
                  </div>
                </div>
                {/* Resources Section */}
                <div className="p-resource">
                  <h2>Resources</h2>
                  <div className="rsrc-btn">
                    {[
                      "UX/UI Design",
                      "Front-End",
                      "Back-End",
                      "Full-Stack",
                      "Graphics Designer",
                      "Web Designer",
                      "QA",
                    ].map((button) => (
                      <button
                        key={button}
                        onClick={() => toggleButton(button)}
                        className={
                          selectedButtons.includes(button) ? "selected" : ""
                        }
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Project Timeline */}
                <div className="p-time">
                  <h2>Project Timeline</h2>
                  <div className="cutoms">
                    <select className="cutoms-select">
                      <option value="project1">customs</option>
                      <option value="project2">1 to 2 month</option>
                      <option value="project3">3 month</option>
                      <option value="project4">4 to 6 month</option>
                      <option value="project5">1 year</option>
                      <option value="project6">Not Given</option>
                    </select>
                  </div>
                  <div className="SED">
                    <div className="date">
                      <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                    </div>

                    <div className="date">
                      <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="estimation">
                  <h2>Estimation</h2>
                  <div className="estimate-input">
                    <span className="currency">USD</span>
                    <input
                      type="text"
                      placeholder="Enter amount"
                      value={estimation}
                      onChange={handleEstimationChange}
                    />
                    <select value={status} className="estimate-select">
                      <option value="project1">status</option>
                      <option value="project2">on track</option>
                      <option value="project3">potential risk</option>
                      <option value="project4">at risk</option>
                      <option value="project5">on hold</option>
                      <option value="project6">drop out</option>
                    </select>
                  </div>
                </div>
                <div className="subcan-btn">
                  <button onClick={resetForm}>Reset</button>
                  <button onClick={toggleForm} className="cancel">
                    Cancel
                  </button>
                  <button onClick={handleAddProject} className="add">Add Project</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
