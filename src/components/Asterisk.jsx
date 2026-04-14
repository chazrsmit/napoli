import './asterisk.css';
import image from '../assets/elements/asterisk-01.png';

export default function Asterisk({clickedAsterisk}) {

    return(
        <>
        <div className="asterisk">
            <img src={`${image}`} onClick={clickedAsterisk} />
        </div>
        </>
    )
}