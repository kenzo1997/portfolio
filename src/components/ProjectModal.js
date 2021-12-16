//Imporve style and make mobile friendly
import React from 'react';
import marked from "marked";

import "../css/ProjectModal.css"

class ProjectModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: null
    }
  }

  componentDidMount() {
    this.getProjectInfo()
  }

  getProjectInfo() {
    fetch(`https://api.github.com/repositories/${this.props.id}/readme`)
      .then(response => response.json())
      .then(project => {
        let text = atob(project.content)
        this.setState({
          project: marked(text.substr(1, 1000) + "...")
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    const { name, url, startDate } = this.props.args;

    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={() => this.props.func()} className="close">&times;</span>
            <h2 style={{ color: '#fff' }}>{name}</h2>
          </div>
          <div className="modal-body">
            <p>Github: <a href={url}>{url}</a></p>
            <div className="readme" dangerouslySetInnerHTML={{ __html: this.state.project }}>
            </div>
          </div>
          <div className="modal-footer">
            <h3>created at: {startDate}</h3>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectModal;
