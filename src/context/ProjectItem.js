import { useSelector } from "react-redux/es/exports";
import { getOwner } from "../features/users/usersSlice";

function ProjectItem({project, Delete}) {
    const partid = useSelector(getOwner);
    return (
        <div className="project-box-wrapper">
          <div className="project-box">
            <div className="project-box-header">
              <span>{project.created_at}</span>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{project.name}</p>
          <p className="box-content-subheader">{project.owner}</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: `${project.process}%`}}></span>
          </div>
          <p className="box-progress-percentage">{project.process}%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            {
              project.participants && project.participants.map((participant) => {
                let person = partid.find((user) => user.id === participant.id);
                return (
                  <img key={participant.id} src={person.picture} alt="participant" title={person.name} />
                );
              })
            }
            {/* <button className="add-participant">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button> */}
          </div>
          <div className="days-left">
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    );
}
export default ProjectItem;