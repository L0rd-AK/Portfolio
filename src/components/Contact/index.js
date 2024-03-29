import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
// import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
const Contact = () => {
    const icon = L.icon({ 
        // iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow 
    });
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const doSomething = async() =>{
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}
useEffect(() => {
    doSomething()
}, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_8vi52w4', 'template_ue5lzrh', form.current, 'Nw2eLjHi1C2PE8ltS')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am looking for a job as a front-end developer - preferably on projects that are challenging and diverse. If you have any inquiries or suggestions, please feel free to reach out to me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bangladesh,
          <br />
          Dhaka,
          <br />
          Daffodil Smart City, 1341 <br />
          Ashulia <br />
          <br />
          <span>amitkumar89155@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[23.8806, 90.3219]} zoom={13}>
            <TileLayer 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.88061, 90.32190]} icon={icon}>
              <Popup>Wellcome To My Contact page.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact