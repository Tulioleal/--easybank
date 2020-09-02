import React from 'react'
import imagenes from '../assets/images'

const Nav = ({links}) =>(
    <nav>
        <img src={imagenes.logo.imagen} alt={imagenes.logo.alt}/>
        <ul>
            <li>
                <a href={links}>Home</a>
            </li>
            <li>
                <a href={links}>About</a>
            </li>
            <li>
                <a href={links}>Contact</a>
            </li>
            <li>
                <a href={links}>Blog</a>
            </li>
            <li>
                <a href={links}>Carrers</a>
            </li>
        </ul>

        <button>Request Invite</button>
        
    </nav>
)

export default Nav