import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.js";
import { Link } from 'gatsby'

//External libraries
import classNames from 'classnames';
import ReCAPTCHA from "react-google-recaptcha";

import Title from '../Title';
import Card from '../Card';

import "../../css/parallax-container.scss";

const NoColumn = (props) => {
     const { 
        image, 
        content: {alignment, body_copy, title}, 
        button, 
        logo,
        cards
    } = props; 

    //NOTE(Rejon): In the case there's no other content on the parallax container we add a class to shrink it's height.
    let parallaxClass = classNames('parallax-container', {
        'heading': !body_copy && !logo && !button.button_text && !button.button_link && cards.length === 0,

    })

    return (
        <section className={parallaxClass}>
            {image && 
            <div className={`parallax`}>
                
                    <img src={image} alt={image.split('.')[0]}/>
                
            </div>
            }
            <div className="cover"></div>
            <div className="content">
                <div className="text-content">
                    {title &&
                        <Title color={'White'} 
                            title_text={title} 
                            title_alignment={alignment} 
                            title_size={'h1'}/>
                    }
                    {body_copy &&
                        <p dangerouslySetInnerHTML={{__html: body_copy}}></p>
                    }
                </div>

                {cards.length > 0 &&
                    <div className={`cards-container ${cards[0].card_type.toLowerCase().replace(/ /g, '-')}`}>
                        {cards.map((card, index) => {
                            return (
                                <Card key={`${card.card_type}-${index}`} {...card}/>
                            )
                        })}
                    </div>
                }

                {logo &&
                    <img src={logo.image} className={`logo ${logo.alignment || ''}`} alt={logo.image.split('.')[0]}/>
                }

                {button.button_text &&
                    <>
                        {button.link_internal ?
                            <Link 
                                to={button.button_link}
                                className={`${button.alignment.toLowerCase().replace(/ /g, '-')} ${button.full_width && 'full-width'} content-container-button waves-effect waves-light btn-large hoverable`}>
                            {button.button_text}
                            </Link>
                        :
                            <a  className={`${button.full_width && 'full-width'} content-container-button waves-effect waves-light btn-large`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href={button.button_link}
                            >
                            {button.button_text}
                            </a>
                        }
                    </>
                }
            </div>
        </section>
    )
}

const TwoColumn = (props) => {
    const { 
        image, 
        content: {alignment, body_copy, title}, 
        button, 
        logo,
        cards, 
        right_column_color,
        show_name,
        show_email,
        show_message,
        submit_button_text
    } = props; 

    let hasForm = show_name !== null && show_email !== null && show_message !== null && submit_button_text !== null;
    
    //NOTE(Rejon): In the case there's no other content on the parallax container we add a class to shrink it's height.
    let parallaxClass = classNames('two-column-parallax-container', {

    });

    let rightColumnStyle = {};
    if (right_column_color) {rightColumnStyle["background"] = right_column_color;}

    return (
        <div className={'two-column-parallax-container'}>
            <div className="left-column">
                {NoColumn(props)}
            </div>
            <div className="right-column" style={rightColumnStyle}>
                {hasForm &&
                    <form className="col s12" name="Contact Form" subject="New Contact Submission" data-netlify-recaptcha="true" netlify-honeypot="bot-field" method="POST" data-netlify="true">
                         <input type="hidden" className="hidden" name="form-name" value="Contact Form" />
                        <p className="hidden">
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <div className="row">
                            <div className={`${right_column_color && 'colored-bg'} input-field col s12`}>
                                <input type="text" name="name" id="name" className="validate" />
                                <label htmlFor="name">Your Name</label>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${right_column_color && 'colored-bg'} input-field col s12`}>
                                <input type="text" name="email" id="email" className="validate" />
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`${right_column_color && 'colored-bg'} input-field col s12`}>
                                <textarea name="message" id="message" className="validate materialize-textarea"></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>
                        </div>
                        <div className="row captcha" data-netlify-recaptcha="true">
                            <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY}/>
                        </div>
                        <p className="submit-button">
                            <button className="btn-large inverted" type="submit">Send</button>
                        </p>
                    </form>
                }
            </div>
        </div>
    )
}

const ParallaxContainer = (props) => {
    let {
        parallax_type
    } = props;

    useEffect(() => {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    }, []);

    switch (parallax_type) {
        case 'No Column': {
            return NoColumn(props);
            break;
        }

        case '2 Column': {
            return TwoColumn(props); 
            break;
        }
    
        default: {
            return NoColumn(props);
            break;
        }
    }
}

export default ParallaxContainer; 