// dans ce component, on va créer la logique du carousel, à faire apparaitre sur la homepage via App.jsx

import { useState } from 'react';
import './carousel.css';

// d'abord, importer les images du dossier assets et les placer dans une variable
// comme on connait déjà le nom de photos (ce n'est pas dynamique), on peut le faire simplement en les important une par une, puis les placer dans un tableau

import photo1 from '../assets/carousel/1.png'
import photo2 from '../assets/carousel/2.png'
import photo3 from '../assets/carousel/3.png'
import photo4 from '../assets/carousel/4.png'
import photo5 from '../assets/carousel/5.png'
import photo6 from '../assets/carousel/6.png'
import photo7 from '../assets/carousel/7.png'
import photo8 from '../assets/carousel/8.png'
import photo9 from '../assets/carousel/9.png'
import photo10 from '../assets/carousel/10.png'
import photo11 from '../assets/carousel/11.png'
import photo12 from '../assets/carousel/12.png'
import photo13 from '../assets/carousel/13.png'
import photo14 from '../assets/carousel/14.png'
import photo15 from '../assets/carousel/15.png'
import photo16 from '../assets/carousel/16.png'
import photo17 from '../assets/carousel/17.png'
import photo18 from '../assets/carousel/18.png'
import photo19 from '../assets/carousel/19.png'
import photo20 from '../assets/carousel/20.png'
import photo21 from '../assets/carousel/21.png'
import photo22 from '../assets/carousel/22.png'
import photo23 from '../assets/carousel/23.png'
import photo24 from '../assets/carousel/24.png'
import photo25 from '../assets/carousel/25.png'
import photo26 from '../assets/carousel/26.png'
import photo27 from '../assets/carousel/27.png'
import photo28 from '../assets/carousel/28.png'
import photo29 from '../assets/carousel/29.png'
import photo30 from '../assets/carousel/30.png'

export default function Carousel () {

// source : https://dev.to/vishalthapaliya/build-a-smooth-performant-image-carousel-in-react-a-beginners-guide-48ji

    const images = [
        { id: 1, src: photo1 },
        { id: 2, src: photo2 },
        { id: 3, src: photo3 },
        { id: 4, src: photo4 },
        { id: 5, src: photo5 },
        { id: 6, src: photo6 },
        { id: 7, src: photo7 },
        { id: 8, src: photo8 },
        { id: 9, src: photo9 },
        { id: 10, src: photo10 },
        { id: 11, src: photo11 },
        { id: 12, src: photo12 },
        { id: 13, src: photo13 },
        { id: 14, src: photo14 },
        { id: 15, src: photo15 },
        { id: 16, src: photo16 },
        { id: 17, src: photo17 },
        { id: 18, src: photo18 },
        { id: 19, src: photo19 },
        { id: 20, src: photo20 },
        { id: 21, src: photo21 },
        { id: 22, src: photo22 },
        { id: 23, src: photo23 },
        { id: 24, src: photo24 },
        { id: 25, src: photo25 },
        { id: 26, src: photo26 },
        { id: 27, src: photo27 },
        { id: 28, src: photo28 },
        { id: 29, src: photo29 },
        { id: 30, src: photo30 },
    ];

// randomiser l'ordre des photos à chaque fois que la page est chargée > à chaque reload, on a un ordre d'images différent
// on va créer une autre variable, qu'on pourra par ex nommer imagesRandom

// gérer l'index avec un useState 

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

// gérer le previous et next (ordi)
// on utilise une arrow function pour chaque button : la logique est qu'à chaque clique, l'index va changer

    const handlePreviousClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
        // on vérifie si on est à l'index 0, donc sur la première image de la liste. si c'est le cas, ça veut dire qu'on va se retrouver au niveau de la dernière image, donc au dernier index, qui est égal à images.length - 1. dans l'autre cas, on va juste à l'index précédent de l'actuel.
    }

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
        // on utilise le modulo %, comme ça si on dépasse la dernière image, on a pas un bug. ce qu'il se passe "mathématiquement", c'est que si on est à la dernière image, donc à l'index images.length - 1, et qu'on clique sur next, on va faire (images.length - 1 + 1) % images.length, ce qui nous ramène à l'index 0, donc à la première image. dans les autres cas, on va juste à l'index suivant de l'actuel (et avec un modulo, il n'y a jamais de réponse à virgule).
    }

    return (
        <>
        <div className="image-container">
            <button className="nav-button left" onClick={ ()=> {handlePreviousClick} }>previous</button>

            {/* on map sur la varibale array d'images pour les faire apparaitre une à une */}
            {images.map((image, index) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt={`Napoli ${image.id}`}
                    className={`image-carousel ${currentImageIndex === index ? 'active' : 'hidden'}`}
                />
            ))}

            <button className="nav-button right" onClick={ ()=> {handleNextClick} }>next</button>
        </div>
        </>
    )

}
