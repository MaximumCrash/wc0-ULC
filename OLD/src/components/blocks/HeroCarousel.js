import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.js";

//Style Imports
import "../../css/hero-carousel.scss";

//For those special cases like Center-Top-Align
const getAlignment = (alignment) => {
    return alignment.includes('top') ? alignment.replace(/-top/g, '') : '';
}

const HeroCarousel = (props) => {
    let {slides} = props; 
    var elems, instances; 

    useEffect(() => {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {full_width: true, indicators: false, interval: 10000});
    }, [])

    return (
        <section className="hero-carousel">
            <div className="slider fullscreen">
                <ul className="slides">
                {slides.map((slide, index) => {
                    let {slide_image, alignment, caption, caption_subtext} = slide;
                    let _alignment = alignment.toLowerCase();
                    return (
                        <li key={`slide${index}`}>
                        <img src={slide_image} alt={slide_image.split('.')[0]}/>
                        <div className="cover"></div>
                        <div className={`caption ${getAlignment(_alignment)} ${_alignment}`}>
                            {caption &&
                                <h4>{caption}</h4>
                            }
                            {caption_subtext &&
                                <h5>{caption_subtext}</h5>
                            }
                        </div>
                        </li>
                    )   
                })}
                </ul>
            </div>
        </section>
    )
}

export default HeroCarousel; 