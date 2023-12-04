/* eslint-disable react/prop-types */
import "../stylesheets/projects.css";
import { FcRating } from "react-icons/fc";

function ProjectCard({project} ) {
  console.log(project);
  return               <div className="col-md-6 my-2">
  <div className="border p-2 border-2 rounded border-dark-subtle">
    <h4>
      <b>{project.pName} <FcRating/></b>
    </h4>
    <p>{project.Description}</p>
    <h6>Tech Stack</h6>
    <div className="d-flex flex-wrap">
      {project.skillList.map((s, i) => {
        return (
          <div key={i} className="p-1">
            <div className="mr-2 rounded border border-dark-subtle py-1 px-2 bg-primary-subtle">
              {s}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>;
}

export default ProjectCard;
