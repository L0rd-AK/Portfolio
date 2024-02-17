import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../../assets/images/prof.jpeg'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'M', 'I', 'T',' ', 'K', 'U', 'M','A','R',' ','G','H','O','S','H']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  const setLetter = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
  }
  useEffect(() => {
    setLetter()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, &nbsp;</span>
            
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Mern Stack Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <div className='ml-[900px] mt-28'>
            <img className='rounded-full h-[400px] w-[400px] border-[#ffd700] border-2' src={Logo} alt="JavaScript Developer Name, Web Developer Name"/>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home