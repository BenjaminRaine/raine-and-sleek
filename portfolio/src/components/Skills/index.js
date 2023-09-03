import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit, faUnity, faReact, faJava, faJira, faJenkins, faPython, faJs} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

const Skills = () => (
    <div className='container about-page'>
        <div className='text-zone'>
        <h1>My Skills - Under Development</h1>
            <div>
                <ul>
                    <li>
                        <a><FontAwesomeIcon icon={faUnity} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faPython} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faJava} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faJs} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faReact} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faDatabase} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faGit} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faJira} colour="4d4d4e" /></a>

                        <a><FontAwesomeIcon icon={faJenkins} colour="4d4d4e" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Skills