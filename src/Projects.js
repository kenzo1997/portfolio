//TODO: make mobile friendly
//TODO setup OAuth for github and find way to cache requests instead of making a request every time
import React from 'react'
import './Projects.css';

import ProjectModal from "./ProjectModal"

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);

        this.state = {
            projects: [],
            modal: <div></div>,
        }
    }

    componentDidMount() {
      this.getProjects();
    }
    
    close() {
      console.log('yes')
      this.setState({
        modal: <div></div>
      });
    }

    getProjects() {
        fetch('https://api.github.com/users/KenzoCoenaerts-r0683311/repos')
            .then(response => response.json())
            .then(githubProjects => {
                this.setState({
                    projects: githubProjects
                });
            })
            .catch(err => console.error(err));
    }

    openModal(id, args) {
      console.log(args);
      
      this.setState({
        modal: <ProjectModal action={this.close} id={id} args={args}/>
      });  
    }

    //TODO; keep working on svg animation
    //TODO: change shape of project circles
    //TODO: make it possible to close projectModal by clicking outside the projectModal
    render() {
        return (
            <div id="projects" onClick={() => console.log(this.state.modal)}>
              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f08080" fill-opacity="1" d="M0,32L14.1,32C28.2,32,56,32,85,74.7C112.9,117,141,203,169,240C197.6,277,226,267,254,229.3C282.4,192,311,128,339,122.7C367.1,117,395,171,424,197.3C451.8,224,480,224,508,213.3C536.5,203,565,181,593,149.3C621.2,117,649,75,678,90.7C705.9,107,734,181,762,192C790.6,203,819,149,847,122.7C875.3,96,904,96,932,122.7C960,149,988,203,1016,208C1044.7,213,1073,171,1101,181.3C1129.4,192,1158,256,1186,261.3C1214.1,267,1242,213,1271,181.3C1298.8,149,1327,139,1355,160C1383.5,181,1412,235,1426,261.3L1440,288L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>
              <div>
              <h2><button>Prev</button> Projects <button>Next</button></h2>
              <div id="projectList">
                  {
                      this.state.projects.map(project => {
                          //console.log(project);
                          return (
                              <a key={project.id} onClick={() => this.openModal(project.id, {"startDate": project.created_at, 
                                                                                             "url": project.html_url,
                                                                                             "name": project.name})} 
                              ><div className="project"></div></a>
                          );
                      })
                  }
              </div>
              </div>
              {this.state.modal}
            </div>
        )
    }
}

export default Projects;