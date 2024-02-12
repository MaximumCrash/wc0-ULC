import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

//MaterializeCSS
import "materialize-css/dist/css/materialize.css"
import M from "materialize-css/dist/js/materialize.js"

// import blocks
import ContentContainer from '../components/blocks/ContentContainer';
import HeroCarousel from '../components/blocks/HeroCarousel';
import ParallaxContainer from '../components/blocks/ParallaxContainer';
import TestimonialCarousel from '../components/blocks/TestimonialCarousel';
import ProfileContentContainer from '../components/blocks/ProfileContentContainer';
import WYSIWYG from '../components/blocks/WYSIWYG';

class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        {
          post.frontmatter.page_layout.map((layout_block, index) => {
            let {template} = layout_block;

            switch(template) {
              case "blockel_hero_carousel": 
                return <HeroCarousel key={`${template}-${index}`} {...layout_block} />
              case "content-container":
                return <ContentContainer key={`${template}-${index}`} {...layout_block} />
              case "blockel_parallax_container":
                return <ParallaxContainer key={`${template}-${index}`} {...layout_block} />
              case "blockel_testimonial_carousel":
                return <TestimonialCarousel key={`${template}-${index}`} {...layout_block} />
              case "blockel_wysiwyg":
                return <WYSIWYG key={`${template}-${index}`} {...layout_block} />
              case "blockel_profile_content_container":
                return <ProfileContentContainer key={`${template}-${index}`} {...layout_block} />
              default: 
                return ''
            }
          })
        }
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        page_layout {
          template
          slides {
            slide_image 
            caption
            caption_subtext
            alignment
          }
          carousel_slides {
            image
            title
            subtitle
            body_copy
          }
          container_type
          container_tab_color
          tab_color
          title
          title_text
          title_icon
          title_alignment
          title_size
          color
          profiles {
             profile_image
          profile_body
          profile_name
          }
          body_copy
          body_copy_alignment
          show_color_tab
          background_color
          has_cards
          has_list
          list_elements {
            text
            material_icon
          }
          cards {
            title
            icon
            tab_color
            card_type
            card_background_color
            detail_list {
              text
              material_icon
            }
            body_copy
          }
          content {
            alignment
            title
            body_copy
          }
          right_column_color
          show_name
          show_email
          show_message
          submit_button_text
          parallax_type
          image
          button {
            button_text
            alignment
            full_width
            button_link
            link_internal
          }
          has_cards
        }
      }
    }
  }
`
