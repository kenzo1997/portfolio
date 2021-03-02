//Imporve style and make mobile friendly
import React from 'react';
import DOMPurify from 'dompurify';
import marked from "marked";

import "./css/ProjectModal.css"

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
  
  //TODO clean up readme and make it more presentable
  getProjectInfo() {
    fetch(`https://api.github.com/repositories/${this.props.id}/readme`)
        .then(response => response.json())
        .then(project => {
            let text = atob(project.content)
            
            this.setState({
              project: marked(text)
            })
        })
        .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.props.action}>&times;</span>
            <h2>{this.props.args.name}</h2>
          </div>
          <div className="modal-body">
            <p>Github: <a href={this.props.args.url}>{this.props.args.url}</a></p>
            <p>Project: </p>
            <p>contributors: </p>
            <p></p>
            <h1></h1>
            <div className="readme" dangerouslySetInnerHTML={{__html: this.state.project}}></div>
          <div className="modal-footer">
            <h3>created at: {this.props.args.startDate}</h3>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ProjectModal;
