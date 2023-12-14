import { Link } from 'react-router-dom';
import './ProjectItem.css';

const ProjectItem = ({ img, projectName, linkTo, isLink }) => {
  return (
    <div className="project-item">
      {isLink ? (
        <Link to={linkTo} className="project-item-link">
          <div className="project-item-top">
            <img src={img} alt={projectName} className="project-picture" />
          </div>
          <div className="project-item-bottom">
            <span>{projectName}</span>
          </div>
        </Link>
      ) : (
        <a href={linkTo} className="project-item-link">
          <div className="project-item-top">
            <img src={img} alt={projectName} className="project-picture" />
          </div>
          <div className="project-item-bottom">
            <span>{projectName}</span>
          </div>
        </a>
      )}
    </div>
  );
};
export default ProjectItem;
