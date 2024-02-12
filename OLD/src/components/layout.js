import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../css/main.scss'

import Navbar from './navbar';


import heading from '../data/header/site-header.json';

import favicon from './favicon.ico'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
            siteUrl
            keywords
            robots
            seo_twitter
            social_image
            theme_color
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { charset: 'utf-8' },
            { hid: 'theme-color', name: 'theme-color', content: data.site.siteMetadata.theme_color},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            {property: 'og:site_name',content: data.site.siteMetadata.title},
            {property: 'og:title', content:`${heading.company_name} | ${heading.company_name_subtitle}`},
            { property: 'og:description', content: data.site.siteMetadata.description},
            { property: 'og:image', content:`${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.social_image}`},
            { property: 'og:url', content: data.site.siteMetadata.siteUrl},
            { hid: 'robots', name: 'robots', content: data.site.siteMetadata.robots },
            {name: 'twitter:card', content:'summary_large_image'},
            { name: 'twitter:site', content:data.site.siteMetadata.seo_twitter},
            { name: 'twitter:title', content: data.site.siteMetadata.title},
            {name: 'twitter:description', content: data.site.siteMetadata.description},
            { name: 'twitter:image', content: `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.social_image}`},
            { name: 'twitter:image:alt', content: data.site.siteMetadata.title}
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header location={location} siteTitle={data.site.siteMetadata.title} />
        <Navbar siteTitle={data.site.siteMetadata.title}/>
        {children}
        <Footer  />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
