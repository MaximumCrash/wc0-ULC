import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import siteHeader from '../data/header/site-header.json';
import contactInfo from '../data/contact/contact-info.json';

import '../css/header.scss';

const Header = (props) => {
  let {
    company_name, 
    company_name_subtitle,
    company_logo,
    tagline,
    show_email, 
    show_phone_number, 
    show_facebook,
    show_twitter,
    show_linkedin,  
    nav_bar_links
  } = siteHeader;

  let {
    contact_email, 
    contact_phone_number, 
    contact_location, 
    social
  } = contactInfo;

  let {
    location
  } = props;

  return (
    <header>
    <div className="site-header">
      <section className="upper ">
        {tagline && tagline !== '' &&
          <div className="tagline">
            {tagline}
          </div>
        }

        <div className="contact-bar">
          {show_email && contact_email.field !== '' &&
            <a className="email" href={`mailto:${contact_email.field}`}>
              {contact_email.material_icon &&
                <i className="small material-icons">{contact_email.material_icon}</i>
              }
              {contact_email.field}
            </a>
          }

          {show_phone_number && contact_phone_number.field !== '' &&
            <a className="phone" href={`tel:${contact_phone_number.field.replace(/-/g, '')}`}>
              {contact_phone_number.material_icon &&
                <i className="small material-icons">{contact_phone_number.material_icon}</i>
              }
              {contact_phone_number.field}
            </a>
          }

          <div className="social-links">
            {show_linkedin && social && social.linkedin !== '' && 
              <a className="linkedin" href={`${social.linkedin}`} target="_blank" rel="noopener noreferrer">
                <img src="../../uploads/linkedin.svg" alt="linkedin-icon"/>
              </a>
            }

            {show_twitter && social && social.twitter !== ''  &&
              <a className="twitter" href={`${social.twitter}`} target="_blank" rel="noopener noreferrer">
                <img src="../../uploads/twitter.svg" alt="twitter-icon"/>
              </a>
            }

            {show_facebook && social && social.facebook !== '' &&
              <a className="facebook" href={`${social.facebook}`} target="_blank" rel="noopener noreferrer">
                <img src="../../uploads/facebook.svg" alt="facebook-icon"/>
              </a>
            }
          </div>
          
        </div>
      </section>
      <section className="lower">
          <Link to="/">
            <div className="home">
              <img src="../../uploads/logo.svg"/>
              <div className="content">
                {company_name !== '' &&
                  <p className="site-name">
                    {company_name}
                  </p>
                }
                {company_name_subtitle !== '' &&
                  <p className="site-subtitle">
                    {company_name_subtitle}
                  </p>
                }
              </div>
            </div>
          </Link>

            {nav_bar_links.length > 0 &&
            
              <ul className="nav-links">
                {nav_bar_links.map((link, index) => {
                    let {
                      nav_link_text,
                      url, 
                      type
                    } = link; 

                    let linkElement = null;
                    let isActive = location ? url.replace(/\//g, '') === location.pathname.replace(/\//g, '') : null;

                    switch(type){
                      case 'Internal': {
                        linkElement = <Link to={url}> {nav_link_text} </Link>;
                        break;
                      }

                      case 'External': {
                        linkElement = <a target="_blank"
                            rel="noopener noreferrer"
                            href={url}
                          >
                            {nav_link_text}
                          </a>;
                        break;
                      }

                      default: {
                        linkElement = <a target="_blank"
                            rel="noopener noreferrer"
                            href={url}
                          >
                            {nav_link_text}
                          </a>;

                        break;
                      }
                    }
                    
                    return (
                      <li key={"header-navbar_link" + index} className={`nav-link ${isActive ? 'active': ''}`}>
                        {linkElement}
                      </li>
                    )
                })}
              </ul>
            }
      </section>
    </div>
  </header>
  )
}

export default Header
