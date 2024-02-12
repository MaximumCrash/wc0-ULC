import React, {useEffect} from 'react'
import M from "materialize-css/dist/js/materialize.js";
import { Link } from 'gatsby'
import decode from 'unescape';

import RainbowTab from '../components/RainbowTab';
import siteFooter from '../data/footer/site-footer.json';
import contactInfo from '../data/contact/contact-info.json';
import siteConfig from '../../site-config.json';
import siteHeader from '../data/header/site-header.json';

import '../css/footer.scss';

const Footer = () => {
    const {
        show_company_logo,
        show_address,
        show_phone_number,
        show_email,
        useful_links
    } = siteFooter;

    const {
        contact_email, 
        contact_phone_number, 
        contact_location,
        social
    } = contactInfo;

    const {
        privacy_policy,
        credits,
        footer
    } = siteConfig;

    const {
        company_name,
        company_logo,
        show_facebook,
        show_twitter,
        show_linkedin
    } = siteHeader;

    useEffect(() => {
        var elems = document.querySelectorAll('.footer-container .modal');
        var instances = M.Modal.init(elems);
    }, [])

    return (
          <footer className="section site-footer footer-container"> 
            <div className="footer">
                <RainbowTab/>
                <div className="content">
                    <div>
                        <div className="company">
                            {company_logo && <img src="../../uploads/logo.svg"/>}
                            {company_name && <p>{company_name}</p>}
                        </div>
                        <ul>
                            {contact_location && 
                                <li> 
                                    {contact_location.address_line1 ? contact_location.address_line1 : ''}
                                    <br/>
                                    {contact_location.address_line2 ? contact_location.address_line2 : ''}
                                </li>
                            }

                            {contact_phone_number.field &&
                                <li>
                                    <a className="phone" href={`tel:${contact_phone_number.field.replace(/-/g, '')}`}>
                                        {contact_phone_number.field}
                                    </a>
                                </li>
                            }

                            {contact_email.field &&
                                <li>
                                    <a className="email" href={`mailto:${contact_email.field}`}>
                                        {contact_email.field}
                                    </a>
                                </li>
                            }
                        </ul>
                        <div className="social">
                            {show_linkedin && social.linkedin &&
                                <a target="_blank" rel="noopener noreferrer" href={social.linkedin}> 
                                    <img src="../../uploads/linkedin.svg"/>
                                </a>
                            }
                            {show_twitter && social.twitter &&
                                <a target="_blank" rel="noopener noreferrer" href={social.twitter}> 
                                    <img src="../../uploads/twitter.svg"/>
                                </a>
                            }
                            {show_facebook && social.facebook &&
                                <a target="_blank" rel="noopener noreferrer" href={social.facebook}> 
                                    <img src="../../uploads/facebook.svg"/>
                                </a>
                            }
                        </div>
                    </div>
                    {useful_links.length > 0 &&
                        <div>
                            <h6>Useful Links</h6>
                            <ul>
                                {useful_links.map((link, index) => {
                                    let {
                                        link_text,
                                        link_url, 
                                        type
                                    } = link; 

                                    let linkElement = null;
                                    
                                    switch(type){
                                    case 'Internal': {
                                        linkElement = <Link to={link_url}> {link_text} </Link>;
                                        break;
                                    }

                                    case 'External': {
                                        linkElement = <a target="_blank"
                                            rel="noopener noreferrer"
                                            href={link_url}
                                        >
                                            {link_text}
                                        </a>;
                                        break;
                                    }

                                    default: {
                                        linkElement = <a target="_blank"
                                            rel="noopener noreferrer"
                                            href={link_url}
                                        >
                                            {link_text}
                                        </a>;

                                        break;
                                    }
                                    }
                    
                                    return (
                                    <li key={"useful-link-" + index}>
                                        {linkElement}
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
                <div>
                    <div className="copyright">
                        <p>{footer}</p>
                    </div>
                    <div className="extra-links">
                        {credits.credit_link && 
                            <a href={credits.credit_link} target="_blank" rel="noopener noreferrer">
                                {credits.credit_label || 'Made with ❤️'}
                            </a>
                        }
                        <p data-target="modal1" className="modal-trigger">Privacy Statement</p>
                    </div>
                </div>

            </div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Privacy Policy</h4>
                    <br/>
                    <div dangerouslySetInnerHTML={{__html: decode(privacy_policy)}}></div>
                </div>
            </div>
        </footer>
    )
}



export default Footer
