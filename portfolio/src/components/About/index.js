import './index.scss'
import BGC from '../../assets/images/experience-bgc.png'
import ESG from '../../assets/images/experience-esg.png'
import MCHP from '../../assets/images/experience-mchp.png'
import BEN1 from '../../assets/images/about-ben1.jpg'
import BEN2 from '../../assets/images/about-ben2.jpg'

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>

                <div className="quartz">
                    <p>
                        I'm a recent computer science graduate from UBC where I learned a great deal about
                        good coding practices, algorithm design, and design patterns and concepts, from both classes
                        and several different cooperative work terms.
                        <br /> <br />
                        I took courses covering algorithm design and analysis, machine learning and AI, computer graphics, computer
                        vision, networking, functional languages, relational databases, and frontend design.
                        <br /> <br />
                        I'm excited to continue learning and growing as developer with new challenges!
                    </p>

                    <img src={BEN2} alt="ben-2" />
                </div>

                <div className="mountbatten">
                    <img src={BGC} alt="logo-bgc"/>

                    <p>
                        My most recent work term was from May-December 2022 at BGC Engineering where I worked on
                        their new Cambio3D project alongside 3 others using C#, Unity, and Python.
                        <br /> <br />
                        Our team being so small and the project being so
                        new gave me  experience working in a startup-like environment where each member had to be
                        flexible implementing, integrating, and adapting to major changes and components by themselves.
                        <br /> <br />
                        I worked on several components including a point annotation system, charts for tracking water pressure,
                        and daily load and haul updates. However my main focus was on continuous integration, performing
                        frequent updates of addressable assets and creating an auto-update bootstrap to automatically keep
                        the client version up to date on launch.
                    </p>
                </div>

                <div className="quartz">
                    <p>
                        My second work term was from May-December 2021 at Eastside Games working on 4 different live games
                        on the live-ops team using C# and Unity.
                        <br /> <br />
                        Working on many games with different tasks and release dates gave me good experience coordinating and
                        prioritizing multiple tasks for frequent releases.
                        <br /> <br />
                        My work was largely focused on quick turn around for various bug fixes, but I also implemented
                        a new splash screen, game center sign out and auto sign in for google compliance, and many small
                        quality of life improvements.
                    </p>
                    <img src={ESG} alt="logo-esg" />
                </div>

                <div className="mountbatten">
                    <img src={MCHP} alt="logo-mchp" />
                    <p>
                        My first work term was from January-April 2021 and Microchip Technologies working on test automation
                        with Python for a team focused on the creation of OTN processors.
                        <br /> <br />
                        As my first software industry experience this was a great opportunity to learn, and with it coming
                        at the peak of the COVID second-wave I had to be a self-starter working independently and flexibly.
                        <br /> <br />
                        I took on several tasks during my time at Microchip such as writing a script to transform
                        and store test logs in an SQL database, writing a script to automatically manage dependencies
                        for different test environments,
                        and scheduling and performing OS and software updates on a test suite of over 200 boards.
                    </p>
                </div>

                <div className="quartz">
                    <p>
                        Outside of software development I enjoy writing poetry, painting, and baking!
                        I'm also considering trying sewing and pottery! (I love making things!)
                        <br /> <br />
                        I love a board game, video game, or TV show when I have the time! Feel free to ask for a
                        recommendation!
                        (I'm not proud to say I have a spreadsheet ranking over a 170 shows.)
                        <br /> <br />
                        Otherwise I love cute dogs (all dogs), poutine with braised beef, Ace of Base, stand-up comedy,
                        colourful cardigans, and breezy summer days!
                    </p>
                    <img src={BEN1} alt="ben-1" />
                </div>
            </div>
        </div>
    )
}

export default About