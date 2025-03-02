import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import MailchimpForm from "../components/MailchimpForm"

const TypeScriptEssentialsFreeGuide = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <div id="signup-area" className="signup-area-bg">
          <div className="content-container">
            <div className="row">
              <div className="hero-content">
                <div>
                  <div className="script-font">time to</div>
                  <h2 className="hero-title">get your offer</h2>

                  
                  <div className="script-font with-rules">fast</div>
                  <br/>

                  <StaticImage
                    className="hero-avatar"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10', borderRadius: '50%'}}
                  />
                  <br/>
                  <br/>
                  
                  {/* Begin Mailchimp Signup Form */}
                  <MailchimpForm gift={'Free Guide'} />
                  {/* End Mailchimp Signup Form */}
                  
                  <br/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TypeScriptEssentialsFreeGuide

export const Head = () => <Seo title="Sell My House Memphis, TN" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 150, height: 100)
            }
          }
        }
      }
    }
  }
`
