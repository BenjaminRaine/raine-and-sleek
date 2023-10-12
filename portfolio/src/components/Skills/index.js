import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit, faUnity, faReact, faJava, faJira, faJenkins, faPython, faJs} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

const Skills = () => {
    const [currentSkill, setSkill] = useState("Unity");

    return (
        <div className='container skills-page'>
            <div className='text-zone'>
            <h1>My Skills</h1>
                {skillBarActive(currentSkill, setSkill)}
                {skillState(currentSkill)}
            </div>
        </div>
    )
}

function skillBarActive(currentSkill, setSkill) {
    return (
        <div>
            <ul className='skillbar'>
                <li>
                    <a className={currentSkill === "Unity" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faUnity} onClick={() => setSkill("Unity")}/>
                    </a>

                    <a className={currentSkill === "Python" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faPython} onClick={() => setSkill("Python")}/>
                    </a>

                    <a className={currentSkill === "Java" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faJava} onClick={() => setSkill("Java")}/>
                    </a>

                    <a className={currentSkill === "JavaScript" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faJs} onClick={() => setSkill("JavaScript")}/>
                    </a>

                    <a className={currentSkill === "React" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faReact} onClick={() => setSkill("React")}/>
                    </a>

                    <a className={currentSkill === "SQL" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faDatabase} onClick={() => setSkill("SQL")}/>
                    </a>

                    <a className={currentSkill === "Git" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faGit} onClick={() => setSkill("Git")}/>
                    </a>

                    <a className={currentSkill === "Jira" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faJira} onClick={() => setSkill("Jira")}/>
                    </a>

                    <a className={currentSkill === "Jenkins" ? 'active' : 'inactive'}>
                        <FontAwesomeIcon icon={faJenkins} onClick={() => setSkill("Jenkins")}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

function skillState(state) {
    let component;
    switch (state) {
        case "Unity":
            component = unitySkill();
            break;
        case "Python":
            component = pythonSkill();
            break;
        case "Java":
            component = javaSkill();
            break;
        case "JavaScript":
            component = javascriptSkill();
            break;
        case "React":
            component = reactSkill();
            break;
        case "SQL":
            component = sqlSkill();
            break;
        case "Git":
            component = gitSkill();
            break;
        case "Jira":
            component = jiraSkill();
            break;
        case "Jenkins":
            component = jenkinsSkill();
            break;
    }
    return component;
}

function unitySkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faUnity}/></div>
        <div className='skill-text'>
            <h2>Unity & C#</h2>
            <p>
                Unity and C# are tools I have been working with since 2020, picking up the basics (Prefabs, IEnumerators,
                Serialization, transforms, etc.) from small personal game projects.
            </p>

            <p>
                At Eastside Games I deeply cemented my understanding of these tools with a wide expanding set of tasks.
                These required modifying and debugging many different pieces of our games, using a amalgam of Unity
                components and services. This also gave me a chance to investigate components and patterns that
                went beyond what I managed on my own (Addressables, Editor Scripts, etc.).
            </p>

            <p>
                At BGC Engineering I gained experience with industry Unity development rather than maintenance, standing
                up and integrating large features by myself. I also
                gained some standalone C# experience developing a WPF application to automatically download our latest
                client build.
            </p>

            <p>
                Most recently I used these for a VR escape room game, learning a lot
                about the XR Interaction Toolkit and more complex physics components I hadn't used in the past.
            </p>
        </div>
    </div>
}

function pythonSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faPython}/></div>
        <div className='skill-text'>
            <h2>Python</h2>
            <p>
                Python was my first language when I was just starting my development journey back in 2018.
                Since then Python has been a part of almost every project I've worked on in one way or another.
                Between work and school I've worked on a diverse set of projects, and my Python
                experience is equally diverse.
            </p>

            <p>
                My first program was a simple dice roll simulator,
                from there I quickly went to counting unique instances of a word in a text file,
                next onto k-means, then gradient descent, Laplacian pyramids, SIFT points, and many more.
            </p>

            <p>
                I've frequently used pandas to parse, process, and write large csvs for different purposes.
            </p>

            <p>
                I've used NumPy to perform complex mathematic operations for various machine learning and computer vision
                algorithms.
            </p>

            <p>
                I use Matplotlib and SciPy for data visualization, whether it's a simple bar chart or a series of clustered
                scatter plots.
            </p>

            <p>
                Beyond these classics I have also used pillow, pip, and pytest.
            </p>
        </div>
    </div>
}

function javaSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faJava}/></div>
        <div className='skill-text'>
            <h2>Java</h2>
            <p>
                I began learning Java in early 2019, this was my introduction to object oriented programming. From there
                Java quickly became a favourite language of mine.
            </p>

            <p>
                A lot of important concepts I learned from my early Java development. A good example is the importance of maximizing
                cohesion and minimizing coupling hard taught from long nights of refactor that could have been done in minutes. Another is
                the importance of covering edge cases from when things kept going wrong even though the JUnit tests came back clean.
            </p>

            <p>
                In 2020 when I was ready to start my first full project outside of school Java was
                what I chose. Aside from Swing for UI I didn't use any libraries for it, I saw this as an opportunity
                to test what I could accomplish with just the algorithms, data structures, and design patterns I
                had learned thus far. I created a dungeon map generator by randomly partitioning a set space, then
                reconnecting in an MST using Prim's algorithm. In the three years since I've learned so much, and I can
                only wonder what I could accomplish trying the same thing again.
            </p>

        </div>
    </div>
}

function javascriptSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faJs}/></div>
        <div className='skill-text'>
            <h2>JavaScript & TypeScript</h2>
            <p>
                I began using JavaScript and Typescript in 2020 for a university course focused on best coding practices.
                This course featured a large project that required scraping course information from the web, storing it,
                and implementing a way to query it as a REST API (all three requiring a complete test suite).
                With such a diverse set of tasks came a diverse set of tools, through this project I learned
                JavaScript and TypeScript as well as dipping my toe in node.js, JQuery, and Mocha.

            </p>

            <p>
                Since that course I've mainly used JavaScript for small web applications using HTML and CSS, with one big
                exception.
            </p>

            <p>
                Through a new UBC class in early 2023 I became adept at using d3 to create interactive and interconnected
                data visualizations. Learning not only how to implement choropleth maps, parallel coordinates, sunburst
                diagrams and others, but how best to combine them to create sleek, clear representations of complex datasets.
                This was an amazing course and I've been browsing Kaggle for cool datasets to create some more just for
                a bit of fun.
            </p>
        </div>
    </div>
}

function reactSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faReact}/></div>
        <div className='skill-text'>
            <h2>React</h2>
            <p>
                React.js and React Native are both tools I've recently set out to learn in full, making use of my
                previous experience in JavaScript, CSS, and HTML.
            </p>

            <p>
                This website itself is a testament to how far I've come with React.js as my first React project. It originally
                began from a tutorial, trying to learn the basics. Since then I've added, modified, and restyled it into
                something unique.
            </p>

            <p>
                During these modifications I've learned a lot about the nuances of React, for example while the sidebar
                on the far left for changing pages and the one for switching skills are styled similarly, the
                React.js part of it is very different. The pages sidebar uses NavLinks, redirecting and knowing what's
                active through that, on the other hand the skills bar tracks and swaps the active skill through useState.
            </p>

            <p>
                React Native I'm still in the process of learning but I'm working towards getting a better understanding
                through a weather app project with I'm actively developing with a friend of mine.
            </p>
        </div>
    </div>
}

function sqlSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faDatabase}/></div>
        <div className='skill-text'>
            <h2>Databases & SQL</h2>
            <p>
                I first began using SQL at Microchip in 2021, converting test logs into an relational format so that they
                could be easily viewed and analysed. Several logs to a test and several tests to a component all tied up neatly.
            </p>

            <p>
                At BGC Engineering I used SQL to query neatly packaged data ready for continuous integration
                with our platform. Here I also gained experience with NoSQL databases in the design and
                implementation of an annotation system using cloud firestore.
            </p>

            <p>
                A lot of my valuable experience came in the spring of 2023 with a course on
                database design. In this course we had to design and implement our own SQL database maintaining
                good database design through principles like BCNF. In our case we used this project create a travel
                itinerary manager, letting users and groups of users create itineraries to and from different locations
                and events through different means.
            </p>

            <p>
                From a functional and logic languages course I learned Prolog and Datalog, programming through
                knowledge bases and pattern matching.
            </p>
        </div>
    </div>
}

function gitSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faGit}/></div>
        <div className='skill-text'>
            <h2>Git</h2>
            <p>
                I began using git and GitHub for source control in 2019, and used them for everything since (aside from
                a stint of Bitbucket and Subversion while at Microchip).
            </p>

            <p>
                I've used git GUI tools including GitHub Desktop, GitKraken, and Sourcetree, for managing branches and merge
                conflicts, but primarily I prefer git as a command line tool.
            </p>

            <p>
                I've worked in a large team, frequently pushing updates on a rapid release schedule, and unsurprisingly
                as a result I've developed skills stashing, pulling, rebasing, and cherry picking to create clean merges
                in ugly situations.
            </p>

            <p>
                However, because I've worked with git for so long I've also encountered my fair share of challenges with
                the tool, and have become adept at solving them, even doing some tech medic at Eastside Games when
                designers ran into issues. Whether it's an issue with credentials, buffer size, timeout, or LFS tracking
                I've become quick and clean at solving them.
            </p>
        </div>
    </div>
}

function jiraSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faJira}/></div>
        <div className='skill-text'>
            <h2>Jira & Grooming</h2>
            <p>
                All of my work terms have used Jira and some other Atlassian services. As such I'm very familiar with
                Jira, its customizablity, and even a bit of JQL.
            </p>

            <p>
                Using Jira at these companies was a very different experience each time. Part of this was due to its
                customizablity with each company having a different setup, but largely this was because of differences in
                in workflow. Differing team sizes, sprint lengths, QA (or lack thereof), and release schedules all played
                a role in how we used Jira.
            </p>

            <p>
                Differences in how we used Jira also influenced how we'd groom and investigate tickets. At Microchip
                we would have a one-on-one with our supervisor.
                At Eastside Games we would hold twice weekly meetings with a subset of developers to assign story points
                to backlogged tickets. At BGC Engineering every quarter we would completely layout the work for the next.
            </p>
            <p>
                An often overlooked skill in developers is knowing how long a task will take, and through grooming
                (and doing) it's one I've continuely sharpened during my development journey.
            </p>
        </div>
    </div>
}

function jenkinsSkill()
{
    return <div className='skill-desc'>
        <div className='large-skill'><FontAwesomeIcon icon={faJenkins}/></div>
        <div className='skill-text'>
            <h2>Jenkins & Groovy</h2>
            <p>
                I first began using Jenkins at my work term with Microchip. There we used Jenkins to perform a lot of
                tasks but primarily test automation. My knowledge of Jenkins deepened a lot during this work term, where
                I frequently modified Jenkinsfiles and groovy script as I added more features to our test automation,
                including Jira tagging, adding test logs to an SQL database, and automatically managing dependencies for
                a particular test or device.
            </p>

            <p>
                At Eastside Games I got to learn about Jenkins being used in a completely different way, for
                build automation, rather than test automation. The process of build automation in Unity went from choosing
                a branch to building the game (or asset bundles) for selected platforms then uploading them to Game Center.
                I wasn't as actively involved in the build automation at Eastside Games beyond just the frequent use of the
                pipeline, however I got to explore it in much deeper detail when we began to have issues with one of the
                games's build pipelines.
            </p>
        </div>
    </div>
}

export default Skills