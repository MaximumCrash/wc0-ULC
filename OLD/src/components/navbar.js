import React, { Component } from 'react'
import { Link } from 'gatsby'

import RainbowTab from './RainbowTab';

import { graphql, StaticQuery } from 'gatsby'

import '../css/mobile_navbar.scss';

class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  toggleNavState = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  render() {
    return (
      <nav
        className="navbar is-primary main-navigation"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to="/"
          >
          <img src="../../uploads/logo_white.svg" alt="navbar-logo"/>
            {this.props.siteTitle}
          </Link>

          <span
            onClick={this.toggleNavState}
            role="button"
            className={
              this.state.navbarOpen
                ? 'navbar-burger burger is-active'
                : 'navbar-burger burger'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="mainMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div
          id="mainMenu"
          className={
            this.state.navbarOpen ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start">
            <RainbowTab/>
            <StaticQuery
              query={graphql`
                {
                  allHeaderJson {
                    edges {
                      node {
                        company_name
                        company_name_subtitle
                        company_logo
                        tagline
                        show_email
                        show_phone_number
                        show_facebook
                        show_twitter
                        show_linkedin
                        nav_bar_links {
                          nav_link_text
                          url
                          type
                        }
                      }
                    }
                  }
                }
              `}
              render={data => 
                data.allHeaderJson.edges[0].node.nav_bar_links.map((edge, index) => {
                  return edge.type === 'Internal' ? (
                    <Link
                      key={"navbar_link" + index}
                      to={edge.url}
                      className="navbar-item"
                    >
                      {edge.nav_link_text}
                    </Link>
                  ) : (
                    <a
                      key={"navbar_link" + index}
                      className="navbar-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.url}
                    >
                      {edge.nav_link_text}
                    </a>
                  )
                })
              }
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
