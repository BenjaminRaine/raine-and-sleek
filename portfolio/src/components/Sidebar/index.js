import './index.scss'
import { NavLink, Link } from 'react-router-dom'
import {useState} from 'react'
import BR from '../../assets/images/logo-br.png'
import SUB from '../../assets/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faPencilRuler, faFolderOpen, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={BR} alt="logo"/>
                <img className="sub-logo" src={SUB} alt="sub-logo"/>
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} colour="4d4d4e"/>
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} colour="4d4d4e"/>
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faPencilRuler} colour="4d4d4e"/>
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faFolderOpen} colour="4d4d4e"/>
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} colour="4d4d4e"/>
                </NavLink>

                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#a5ffd6" size="3x" className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/BenjaminRaine'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>

                    <a target="_blank" rel='noreferrer' href='https://ca.linkedin.com/in/ben-raine-a8abb61a2/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#a5ffd6" size="3x" className='hamburger-icon'/>

        </div>
    )
}

export default Sidebar