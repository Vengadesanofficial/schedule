import React from 'react'
import { useSelector } from 'react-redux';
import '../tabel/tabel.css'


const Projectlist = () => {
   const projects = useSelector((state) => state.project.projects);
  const projectData = {
    Select : <label className="custom-checkbox">
  <input name="dummy" type="checkbox" />
      <span className="checkmark"></span>
    </label>,
    SI : "1",
    projectName: 'PDGFT1',
    pm: 'S',
    status: 'Ongoing',
    lastUpdate: '2024-10-29',
    resources: 'Design',
    timeline: '2024-2025',
    estimation: '20 weeks',
    Update : <button className='update'>UPDATE</button>
  };

  return (
    
  <div className='plist-main'>
    <div className='plist-fill'>
      <button>All</button>
      <button>Risk</button>
      <button>On Hold</button>
      <button>Potential Risk</button>
      <button>On Track</button>
      <button>Archieved</button>
    </div>
     <div className="table-container">
      <table className="project-table">
        <thead>
          <tr>
           
            <th>SI.NO</th>
            <th>Project Name</th>
            <th>PM</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Resources</th>
            <th>Project Timeline</th>
            <th>Estimation</th>
           
          </tr>
        </thead>
        <tbody>
         {projects.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.projectName}</td>
              <td>{project.selectedManager}</td>
              <td>{project.status}</td>
              <td></td>
              <td>
                {project.selectedResources.length}
                <span title={project.selectedResources.join(', ')}> ⓘ </span>
              </td>
              <td>{`${project.startDate} - ${project.endDate}`}</td>
              <td>{project.estimation}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Projectlist;    