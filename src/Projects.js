import React from 'react'
import './css/Projects.css';

import ProjectModal from "./components/ProjectModal"
import ProjectList from "./components/ProjectList"

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: <div></div>,
      projectListStyle: "projectList",
      waveAnim: "wave",
    }
  }

  listenScrollEvent = e => {
    const { innerHeight: height } = window;
    if (window.scrollY > (height * 2) - 250) {
      this.setState({
        projectListStyle: "projectList-reveal",
        waveAnim: "wave-anim"
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  closeModal = () => {
    this.setState({
      modal: <div></div>
    });
  }

  openModal(id, args) {
    this.setState({
      modal: <ProjectModal id={id} args={args} func={this.closeModal} />
    });
  }

  render() {
    const { modal, waveAnim } = this.state;

    return (
      <div id="projects">
        <svg className={waveAnim} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" > <path fill="#f08080" fillOpacity="1" d="M0,32L14.1,32C28.2,32,56,32,85,74.7C112.9,117,141,203,169,240C197.6,277,226,267,254,229.3C282.4,192,311,128,339,122.7C367.1,117,395,171,424,197.3C451.8,224,480,224,508,213.3C536.5,203,565,181,593,149.3C621.2,117,649,75,678,90.7C705.9,107,734,181,762,192C790.6,203,819,149,847,122.7C875.3,96,904,96,932,122.7C960,149,988,203,1016,208C1044.7,213,1073,171,1101,181.3C1129.4,192,1158,256,1186,261.3C1214.1,267,1242,213,1271,181.3C1298.8,149,1327,139,1355,160C1383.5,181,1412,235,1426,261.3L1440,288L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg >
        <ProjectList info={this.state} openModal={this.openModal.bind(this)} />
        {modal}
      </div >
    )
  }
}

export default Projects;

/*


















<svg className={waveAnim}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  version="1.1"
  id="svg4">
  <defs
    id="defs8">
    <filter

      id="filter238">
      <feFlood
        flood-opacity="0.498039"
        flood-color="rgb(0,0,0)"
        result="flood"
        id="feFlood228" />
      <feComposite
        in="flood"
        in2="SourceGraphic"
        operator="in"
        result="composite1"
        id="feComposite230" />
      <feGaussianBlur
        in="composite1"
        stdDeviation="29.4"
        result="blur"
        id="feGaussianBlur232" />
      <feOffset
        dx="0"
        dy="-31.8"
        result="offset"
        id="feOffset234" />
      <feComposite
        in="SourceGraphic"
        in2="offset"
        operator="over"
        result="composite2"
        id="feComposite236" />
    </filter>
  </defs>
  <path
    fill="#f08080"
    fill-opacity="1"
    d="M0,160L9.6,181.3C19.2,203,38,245,58,224C76.8,203,96,117,115,80C134.4,43,154,53,173,90.7C192,128,211,192,230,218.7C249.6,245,269,235,288,218.7C307.2,203,326,181,346,186.7C364.8,192,384,224,403,197.3C422.4,171,442,85,461,48C480,11,499,21,518,53.3C537.6,85,557,139,576,181.3C595.2,224,614,256,634,245.3C652.8,235,672,181,691,170.7C710.4,160,730,192,749,202.7C768,213,787,203,806,192C825.6,181,845,171,864,186.7C883.2,203,902,245,922,224C940.8,203,960,117,979,117.3C998.4,117,1018,203,1037,202.7C1056,203,1075,117,1094,85.3C1113.6,53,1133,75,1152,80C1171.2,85,1190,75,1210,106.7C1228.8,139,1248,213,1267,218.7C1286.4,224,1306,160,1325,112C1344,64,1363,32,1382,48C1401.6,64,1421,128,1430,160L1440,192L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
    id="path2"
    style={{ filter: "url(#filter238)" }} />
</svg>

*/
