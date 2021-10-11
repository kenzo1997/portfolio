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
      <div></div>
    )
  }
}

export default ProjectModal;
