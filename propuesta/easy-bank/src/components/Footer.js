import React from 'react'
import imagenes from '../assets/images'

const Footer = () =>(
    
    <>
        <footer>
            <div>
                <img src={imagenes.logo.imagen} alt={imagenes.logo.alt}/>
                <div>
                    <img src={imagenes.facebook.imagen} alt={imagenes.facebook.alt}/>
                    <img src={imagenes.youtube.imagen} alt={imagenes.youtube.alt}/>
                    <img src={imagenes.twitter.imagen} alt={imagenes.twitter.alt}/>
                    <img src={imagenes.pinterest.imagen} alt={imagenes.pinterest.alt}/>
                    <img src={imagenes.instagram.imagen} alt={imagenes.instagram.alt}/>
                </div>
            </div>
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <button>Request Invite</button>
                <span>© Easybank. All Rights Reserved</span>
            </div>
        </footer>
    </>

)

export default Footer