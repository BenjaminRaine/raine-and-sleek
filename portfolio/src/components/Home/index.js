import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import "./index.scss";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I', '\'',  'm', ' ', 'B', 'e', 'n', ' ', 'R', 'a', 'i', 'n', 'e']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
      <div className='container home-page'>
          <div className="text-zone">
              <h1>
                  <span className={`${letterClass} _11`}>H</span>
                  <span className={`${letterClass} _12`}>i</span>
                  <span className={`${letterClass} _13`}>,</span>
                  <br />

                  <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={14} />
                  <br />
                  <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} />
                  <br />
              </h1>
              <h2>C# & Unity Developer / Python Developer</h2>
              <Link to="/contact" className='flat-button'>CONTACT ME</Link>
          </div>
          <Logo />
      </div>
    );
}

export default Home