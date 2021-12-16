import '../../css/Project.css';
const Project = (props) => {

  const { id, created_at, html_url, name } = props.project;

  return (
    <div key={id} onClick={() => props.openModal(id, {
      "startDate": created_at,
      "url": html_url,
      "name": name
    })}
    ><div className="project"><p>{name}</p></div></div>
  );
}

export default Project
