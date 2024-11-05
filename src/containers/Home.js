import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faGraduationCap,
  faLaptopCode,
  faMoon,
  faSun,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import Milestone from '../components/Milestone'
import Project from '../components/Project'
import milestones from '../content/milestones'
import education from '../content/education'
import leadership from '../content/leadership'
import skills from '../content/skills'
import projects from '../content/projects'
import AboutCard from '../components/AboutCard'

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			darkMode: false,
		}
	}

  onDarkModeToggle = () => {
    this.setState({darkMode: !this.state.darkMode});
    document.body.classList.toggle('bg-dark')
  };

  render = () => (
    <Container className={`px-md-0 py-5 ${this.state.darkMode ? 'text-light' : 'text-dark'}`}>
      <div id='dark-mode-toggle' className='text-right'>
        <Button variant="link" onClick={this.onDarkModeToggle} className='mode-toggle' title={this.state.darkMode ? 'Light mode' : 'Dark mode'}>
          <FontAwesomeIcon id='sun' icon={faSun} className={this.state.darkMode ? 'inactive-icon' : 'active-icon'}/>
          <FontAwesomeIcon icon={faMoon} className={this.state.darkMode ? 'active-icon' : 'inactive-icon'} />
        </Button>
      </div>
      <Row>
        <Col md='4' className='px-md-0'>
          <div id='about' className='sticky-top'>
            <AboutCard darkMode={this.state.darkMode}/>
          </div>
        </Col>

        <Col md='8' className='pl-md-0 pl-md-5'>
          <h4 className='section-title pt-0'>
            <FontAwesomeIcon icon={faLaptopCode}/>
            <span className='pl-3'>experience</span>
          </h4>
          {renderMilestones(milestones)}

          <h4 className='section-title'>
            <FontAwesomeIcon icon={faGraduationCap}/>
            <span className='pl-3'>education</span>
          </h4>
          <Milestone milestone={education[0]} id={0} />
          <div className='small'>

            <div>
              <span className='font-weight-bold'>Coursework: </span>
 <span> </span>
            Data Structures and Algorithms, Software Engineering, Computer Networking, Analysis of Algorithms,
            Parallel Programming, Intro to Databases, Computer Architecture and Assembly,
            Web Development, Fundamentals of Programming
            </div>
          </div>
          <Milestone milestone={education[1]} id={1} />
          <div className='small'>
            <span className='font-weight-bold'>Coursework: </span>
            Cellular and Molecular Biology, Organic Chemistry, Biochemistry, Calculus 1, Statistics, 
            Genetics, Anatomy and Physiology,
            Ecology, Evolution, General Chemistry, General Biology

          </div>

          <h4 className='section-title'>
            <FontAwesomeIcon icon={faCode}/>
            <span className='pl-3'>projects</span>
          </h4>
          {renderProjects(projects)}

          <h4 className='section-title'>
            <FontAwesomeIcon icon={faUsers}/>
            <span className='pl-3'>leadership</span>
          </h4>
          {renderMilestones(leadership)}




        </Col>
      </Row>
    </Container>
  )
}
  
const renderMilestones = milestones => {
  let i = 0
  return milestones.map(m => 
    <Milestone milestone={m} id={i++} key={m.company} />         
  )
}

const renderProjects = projects => {
  let i = 0
  return projects.map(p => 
    <Project project={p} id={i++} key={p.title} />         
  )
}

export default Home;
  
