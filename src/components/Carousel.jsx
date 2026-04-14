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

import left from '../assets/elements/left-arrow-01.png'
import right from '../assets/elements/right-arrow-01.png'

export default function Carousel () {

// source : https://dev.to/vishalthapaliya/build-a-smooth-performant-image-carousel-in-react-a-beginners-guide-48ji
//// IMPORT ////
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

//// RANDOMISER ////
// randomiser l'ordre des photos à chaque fois que la page est chargée > à chaque reload, on a un ordre d'images différent
// on va créer une fonction, qui va prendre en paramètre un tableau d'images (ici notre tableau 'images'), et qui va mélanger ce tableau de manère aléatoire.

    const shuffleArray = (array) => {
        const arr = [...array];

        for (let i = arr.length - 1 ; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        };

        return arr;
    }

    const [imagesRandom] = useState(() => shuffleArray(images));
    // on éxecute une seule fois la fonction, au moment du render. on utilise une fonction fléchée pour que ça soit plus propre, et on utilise un useState pour stocker le résultat de cette fonction, qui est un tableau d'images mélangé. on utilise une fonction fléchée dans le useState pour que la fonction shuffleArray ne soit éxecutée qu'une seule fois, au moment du render, et pas à chaque fois que le composant se re-render (ce qui serait le cas si on mettait directement shuffleArray(images) dans le useState). en effet, si on mettait directement shuffleArray(images), à chaque fois que le composant se re-renderait, la fonction shuffleArray serait éxecutée à nouveau, ce qui ferait que les images seraient mélangées à chaque re-render, ce qui n'est pas ce qu'on veut.

    // on doit le faire une deuxième fois pour le container du bas dans la version mobile:
    const [imagesRandom2] = useState(() => shuffleArray(images));

///// INDEX : gérer l'index avec un useState ////
    // version ordi + top container:
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // bottom container sur mobile:
    const [bottomImageIndex, setBottomImageIndex] = useState(0);

//// PREVIOUS & NEXT ////
// on utilise une arrow function pour chaque button : la logique est qu'à chaque clique, l'index va changer
    // sur l'ordi et le top container:
    const handlePreviousClick = () => {
        console.log("previous clicked");
        setCurrentImageIndex(currentImageIndex === 0 ? imagesRandom.length - 1 : currentImageIndex - 1);
        // on vérifie si on est à l'index 0, donc sur la première image de la liste. si c'est le cas, ça veut dire qu'on va se retrouver au niveau de la dernière image, donc au dernier index, qui est égal à images.length - 1. dans l'autre cas, on va juste à l'index précédent de l'actuel.
    }
    const handleNextClick = () => {
        console.log("next clicked");
        setCurrentImageIndex((currentImageIndex + 1) % imagesRandom.length);
        // on utilise le modulo %, comme ça si on dépasse la dernière image, on a pas un bug. ce qu'il se passe "mathématiquement", c'est que si on est à la dernière image, donc à l'index images.length - 1, et qu'on clique sur next, on va faire (images.length - 1 + 1) % images.length, ce qui nous ramène à l'index 0, donc à la première image. dans les autres cas, on va juste à l'index suivant de l'actuel (et avec un modulo, il n'y a jamais de réponse à virgule).
    }

    // pour le bottom container, on a la logique du swipe left et right directement dans al fonciton touchEndBottom.
    //     const handlePreviousBottom = () => {
    //     setBottomImageIndex(bottomImageIndex === 0 ? imagesRandom2.length - 1 : bottomImageIndex - 1);
    // }

    // const handleNextBottom = () => {
    //     setBottomImageIndex((bottomImageIndex + 1) % imagesRandom2.length);
    // }

//// TOUCH / SWIPES MOBILE ////
// on va gérer les event handlers pour la version mobile (inspi : https://dev.to/rakumairu/how-to-handle-swipe-event-on-react-carousel-24ab)

    // mesurer la position INITIALE du swipe/doigt (container top et bottom)
    const [touchTop, setTouchTop] = useState(null);
    const [touchBottom, setTouchBottom] = useState(null);

    // top container
    const handleTouchStartTop = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchTop(touchDown);
    }
    // bottom container
    const handleTouchStartBottom = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchBottom(touchDown);
    }

    // ensuite, on va mesurer la position FINALE du swipe, et calculer la distance parcourue par le doigt. si cette distance est supérieure à un certain seuil (par exemple, 50 pixels), on considère que c'est un swipe valide, et on déclenche l'action correspondante (previous ou next). il faut aussi prendre en compte la direction du swipe (gauche ou droite) pour savoir quelle action déclencher. une valeur négative signifie un swipe vers la droite, et une valeur positive signifie un swipe vers la gauche.
    // on sépare pour chaque containter (top et bottom)

    // top container:
    const handleTouchEndTop = (e) => {
        if (touchTop === null) return;

        const endX = e.changedTouches[0].clientX;
        const diff = touchTop - endX;

        // swipe gauche → next
        if (diff > 50) {
            setCurrentImageIndex(prev =>
                (prev + 1) % imagesRandom.length
            );
        }

        // swipe droite → previous
        if (diff < -50) {
            setCurrentImageIndex(prev =>
                prev === 0 ? imagesRandom.length - 1 : prev - 1
            );
        }

        setTouchTop(null);
        //  on reset 
    }

    // bottom container:
    const handleTouchEndBottom = (e) => {
        if (touchBottom === null) return;

        const endX = e.changedTouches[0].clientX;
        const diff = touchBottom - endX;

        if (diff > 50) {
            setBottomImageIndex(prev =>
                (prev + 1) % imagesRandom2.length
            );
        }

        if (diff < -50) {
            setBottomImageIndex(prev =>
                prev === 0 ? imagesRandom2.length - 1 : prev - 1
            );
        }

        setTouchBottom(null);
    };

    /////////////////////////////////////////////////////////


    return (
        <>
        {/* version ordinateur */}
        <div className="image-container">
            <button className="nav-button left" onClick={handlePreviousClick}>
                <img src={`${left}`} />
            </button>

            {/* on map sur la variable array d'images pour les faire apparaitre une à une */}
            {imagesRandom.map((image, index) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt={`Napoli ${image.id}`}
                    className={`image-carousel ${currentImageIndex === index ? 'active' : 'hidden'}`}
                />
            ))}

            <button className="nav-button right" onClick={handleNextClick}>
                <img src={`${right}`} />
            </button>
        </div>

        {/* version mobile */}

        <div className="container-mobile">
            <div className="mobile-img-top" onTouchStart={handleTouchStartTop} onTouchEnd={handleTouchEndTop}>
                {imagesRandom.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={`Napoli ${image.id}`}
                        className={`image-mobile ${currentImageIndex === index ? 'active' : 'hidden'}`}
                    />
                ))}

            </div>
            <div className="mobile-img-bottom" onTouchStart={handleTouchStartBottom} onTouchEnd={handleTouchEndBottom}>
                {imagesRandom2.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={`Napoli ${image.id}`}
                        className={`image-mobile2 ${bottomImageIndex === index ? 'active' : 'hidden'}`}
                    />
                ))}
            </div>
                {/* version avec 3 images stacked on top of each other sur la version mobile */}

        </div>
        </>
    )

}
