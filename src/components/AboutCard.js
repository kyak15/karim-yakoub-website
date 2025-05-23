import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    // faFileDownload,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import portImage from '../img/portfolio_image.jpg'
import skills from '../content/skills'


const AboutCard = ({ darkMode }) => {
    const textColor = darkMode ? 'text-light' : 'text-dark'

    return (
        <Card className="mb-3" bg={darkMode ? 'dark' : 'white'} border={darkMode ? 'secondary' : ''}>

            <Card.Img variant='top' src={portImage} />

            <Card.ImgOverlay className='text-left text-black'>
                <h2>Karim Yakoub</h2>
                <p className='font-weight-500 smaller w-md-75 w-50 float-left'>
                    Software Engineer, Student, and Science Lover
                </p>
            </Card.ImgOverlay>

            <Card.Body>

                <div className={`mb-1 ${textColor}`}>
                    <FontAwesomeIcon icon={ faMapMarkerAlt } />
                    <span className='pl-2'>Hawthorne, NJ, USA</span>
                </div>

                <div className='mb-1'>
                    <Card.Link className={textColor} href='https://github.com/kyak15' target='blank'>
                        <FontAwesomeIcon icon={ faGithub } />
                        <span className='pl-2'>github.com/kyak15</span>
                    </Card.Link>
                </div>

                <div className='mb-4'>
                    <Card.Link className={textColor} href='https://linkedin.com/in/karim-yakoub' target='blank'>
                        <FontAwesomeIcon icon={ faLinkedin } />
                        <span className='pl-2'>linkedin.com/in/karim-yakoub</span>
                    </Card.Link>
                </div>
                
                {skills.map(s => 
            <div key={s.title} className={`pb-3   ${textColor}`} >
              <span className={`font-weight-bold ${textColor}`}>{s.title}: </span>
              {s.skills.join(', ')}
            </div>
          )}


            </Card.Body>

        </Card>
    )
}

export default AboutCard