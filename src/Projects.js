//TODO: make ;obile friendly
import React from 'react'
import './Projects.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    getProjects() {
        fetch('https://api.github.com/users/KenzoCoenaerts-r0683311/repos')
            .then(response => response.json())
            .then(githubProjects => {
                this.setState({
                    projects: githubProjects
                });
            })
            .catch(err => console.log('error'));
    }

    componentDidMount() {
      this.getProjects();
    }


    //TODO; create SVG wave animation
    render() {
        return (
            <div id="projects">
                <svg transform="scale(1, -1) translate(0, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318">
                  <path fill="#f08080" fillOpacity="1" d="M0,32L6.2,48C12.3,64,25,96,37,122.7C49.2,149,62,171,74,181.3C86.2,192,98,192,111,186.7C123.1,181,135,171,148,192C160,213,172,267,185,245.3C196.9,224,209,128,222,90.7C233.8,53,246,75,258,85.3C270.8,96,283,96,295,122.7C307.7,149,320,203,332,202.7C344.6,203,357,149,369,154.7C381.5,160,394,224,406,218.7C418.5,213,431,139,443,128C455.4,117,468,171,480,197.3C492.3,224,505,224,517,218.7C529.2,213,542,203,554,192C566.2,181,578,171,591,165.3C603.1,160,615,160,628,181.3C640,203,652,245,665,256C676.9,267,689,245,702,202.7C713.8,160,726,96,738,85.3C750.8,75,763,117,775,112C787.7,107,800,53,812,58.7C824.6,64,837,128,849,170.7C861.5,213,874,235,886,224C898.5,213,911,171,923,138.7C935.4,107,948,85,960,64C972.3,43,985,21,997,53.3C1009.2,85,1022,171,1034,186.7C1046.2,203,1058,149,1071,117.3C1083.1,85,1095,75,1108,69.3C1120,64,1132,64,1145,85.3C1156.9,107,1169,149,1182,181.3C1193.8,213,1206,235,1218,234.7C1230.8,235,1243,213,1255,170.7C1267.7,128,1280,64,1292,64C1304.6,64,1317,128,1329,128C1341.5,128,1354,64,1366,69.3C1378.5,75,1391,149,1403,197.3C1415.4,245,1428,267,1434,277.3L1440,288L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
                </svg>
                <h2>Projects</h2>
                <div id="projectList">
                    {
                        this.state.projects.map(project => {
                            //console.log(project);
                            return (
                                <a key={project.id} href={project.html_url}><div className="project"></div></a>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;

/*
 */
