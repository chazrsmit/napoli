import './modal.css'
import { useState } from 'react'
import close from '../assets/elements/close.webp'
import close2 from '../assets/elements/close-contour.webp'

export default function Modal({ children, onClose, isModalOpen }) {

    const [isHovered, setIsHovered] = useState(false);

    const whenHovered = () => {
        setIsHovered(!isHovered)
        console.log(isHovered)
    }

    const notHovered = () => {
        setIsHovered(!isHovered)
        console.log(isHovered)
    }

    return (

        <>
        <div className={`overlay ${isModalOpen? 'opened' : 'closed'}`}>
            <div className="modal">
                <div className="texte">
                    {children}
                </div>
                <button className="closeBtn" onClick={onClose}>
                    <img src={`${close2}`} className={`close2 ${isHovered? 'hovered' : 'notHovered'}`}/>
                    <img src={`${close}`} onMouseEnter={whenHovered} onMouseLeave={notHovered} className={`close1 ${isHovered? 'hovered' : 'notHovered'}`} />
                </button>
            </div>
        </div>
        </>
    )
}