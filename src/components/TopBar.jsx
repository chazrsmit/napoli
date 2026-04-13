import './topbar.css';
// source: https://www.npmjs.com/package/react-inlinesvg
import SVG from 'react-inlinesvg';
import titre from '../assets/elements/titre-pink-01.png';

export default function TopBar() {


    return (

        <>
        <div className="topbar">

            {/* < SVG
                src={`${titre}`}
                width={128}
                height="auto"
            /> */}
            <img src={`${titre}`} />

        </div>
        </>
    )
}