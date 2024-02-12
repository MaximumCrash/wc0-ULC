import React, {useEffect} from 'react';
import Glide from '@glidejs/glide';


//Local files
import Title from '../Title';

//Style Imports
import "../../css/testimonial-carousel.scss";

const TestimonialCarousel = (props) => {

    let {
        title,
        carousel_slides
    } = props;

    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0, 
            perView: 1, 
            focusAt: 'center',
            gap: 0,
            autoplay: 3000,
            hoverpause: true, 
            animationDuration: 700
        }).mount();
    }, [])

    if (carousel_slides.length <= 0) {return (<></>)};

    return (
        <div className="testimonial-carousel">
            {title &&
                <Title title_text={title} {...props}/>
            }

            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {carousel_slides.map((slide, index) => {
                            let {
                                body_copy,
                                image,
                                subtitle, 
                                title
                            } = slide; 

                            if (!body_copy && !image && !subtitle && !title) return null; 

                            return (
                                <li className="glide__slide">
                                    {image && <img src={image} alt={image.split('.')[0]}/>}
                                    {title && <p className="title">{title}</p>}
                                    {subtitle && <p className="subtitle">{subtitle}</p>}
                                    {body_copy && <p className="body-copy" dangerouslySetInnerHTML={{__html: body_copy}}></p>}
                                </li>
                            )
                        })}
                    </ul> 
                </div>
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0"></button>
                    <button class="glide__bullet" data-glide-dir="=1"></button>
                    <button class="glide__bullet" data-glide-dir="=2"></button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarousel; 