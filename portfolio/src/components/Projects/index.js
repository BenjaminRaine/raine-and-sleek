import './index.scss'
import WEB from "../../assets/images/web-project.PNG"
import DUN from "../../assets/videos/dun-gen.mp4"
import SPR from "../../assets/videos/spare-trailer.mp4"
const Projects = () => {

    /*
    CUT TEXT:

    After I got the hang of things I decided against anything
    overly complex for the ease of the user. The controls consisted of using the grips to grab interactables,
    triggers to press UI buttons, joysticks to turn and move, and rigidbodies on the controllers
    to intuitively press or push in the world.
    <br /> <br />
     */

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>Projects</h1>

                <div className="plum">
                    <p>
                        Needing a place to showcase my skills and projects as well as having long standing desire to learn
                        React.js this portfolio website served as the perfect chance to kill two birds with one stone.
                        <br /> <br />
                        Originally I started with some YouTube tutorials picking up the basics from there,
                        but I quickly found myself diving deeper into documentation and Stack Overflow wanting to add and
                        style this website into something unique to myself.
                        <br /> <br />
                        <a href="https://github.com/BenjaminRaine/raine-and-sleek">Repository</a>
                    </p>

                    <img src={WEB} alt="web-pic" />
                </div>

                <div className="raisin">
                    <video controls>
                        <source src={SPR} type="video/mp4"/>
                    </video>

                    <p>
                        I've done some small game projects in the past when I was first learning Unity in 2020.
                        However, after 16 months of Unity centric work terms at Eastside Games and BGC Engineering
                        my I wanted to put what I'd learned to the test and learn something new at the same time.
                        I quickly decided on a VR game.
                        <br /> <br />
                        Over of a couple weeks I applied this knowledge populating the level and crafting puzzles
                        through flexible and reusable prefabs and scripts. This allowed me to quickly move through development
                        focusing my attention on the concepts and components of XR Interaction toolkit I was keen to learn.
                        While I struggled a bit at first, it's clear from the end product
                        that I learned how to integrate tracking, continuous movement, and interaction mapping with
                        both 3D objects and UI components.
                        <br /> <br />
                        While there's plenty of things I still plan to add such as idle audio, haptic feedback, improved
                        attach points, and more, I'm quite proud of the current version I managed to put together in
                        a couple weeks!
                        <br /> <br />
                        <a href="https://github.com/BenjaminRaine/spare-vr-escape-room">Repository</a> &emsp;
                        <a href="https://youtu.be/pEmCKvVpdVo">Full Playthrough</a> &emsp;
                        <a download href="/downloads/Spare.zip">Current Build</a>
                    </p>
                </div>

                <div className="plum">
                    <p>
                        In 2020 I was ready to start my first project with a scope beyond a coding assignment. I wanted
                        to test the applications of the algorithms, data structures, and design patterns I had learned so
                        far. Playing a lot of D&D at the time I quickly decided on a dungeon generator, as the rooms and
                        their connections translated quite cleanly to a graph as nodes and edges.
                        <br /> <br />
                        My actual methodology for generation was first to recursively partition the map space by randomly
                        dividing across the long edge of the room until each was under a certain threshold size. Next I
                        to place a point randomly within each partitioned space and create the largest rectangle possible
                        using the point as a corner. Finally these rectangles are connected in a MST through Prim's algorithm.
                        <br /> <br />
                        A great benefit of this project was it made me start thinking more carefully about edge cases.
                        What if 2 or 3 doors connect to the same tile? Is it possible for hallways to cross?
                        <br /> <br />
                        While a little rough around the edges, I still have a soft spot for this project, as reminder of
                        what I was capable of doing during the early days of my development journey and how far I have
                        come since.
                        <br /> <br />
                        <a href="https://github.com/BenjaminRaine/Dungeon-Generator">Repository</a>
                    </p>
                    <video controls>
                        <source src={DUN} type="video/mp4"/>
                    </video>
                </div>

            </div>
        </div>
    )
}

export default Projects