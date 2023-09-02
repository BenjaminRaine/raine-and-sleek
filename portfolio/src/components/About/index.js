import './index.scss'
import BGC from '../../assets/images/experience-bgc.png'
import ESG from '../../assets/images/experience-esg.png'
import MCHP from '../../assets/images/experience-mchp.png'

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>

                <div className="quartz">
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about
                        good coding practices, algorithm design, and design patterns and concepts, from both classes
                        and several different cooperative work terms. These included work at BGC Enginnering,
                        Eastside Games, and Microchip Technologies.
                        I'm excited to continue learning and growing as developer with new challenges!
                    </p>

                    <img src={BGC} alt="logo"/>
                </div>

                <div className="mountbatten">
                    <img src={BGC} alt="logo"/>
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about
                    </p>
                </div>

                <div className="quartz">
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about...
                    </p>
                    <img src={ESG} alt="logo"/>
                </div>

                <div className="mountbatten">
                    <img src={MCHP} alt="logo"/>
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about...
                    </p>
                </div>

                <div className="quartz">
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about...
                    </p>
                    <img src={BGC} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default About