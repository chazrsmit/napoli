import './modal.css'

export default function Modal({ children, onClose }) {

    return (

        <>
        <div className="overlay">
            <div className="modal">
                <div className="texte">
                    {children}
                    <button className="closeBtn" onClick={onClose}>
                        close
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}