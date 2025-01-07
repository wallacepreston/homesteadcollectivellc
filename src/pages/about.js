import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">


        {/* about section */}
        <section id="about" className="section-padding">
          <div className="flex flex-column content-container">
            <div className="sm:flex section-padding">
              <div className="basis-1/2 m-2">
                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <StaticImage
                    className="profile-image"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10'}}
                  />
                </div>
              </div> 
              <div className="basis-1/2 m-2">
                <div className="profile-wrapper section-padding wow fadeInRight" data-wow-delay="0.3s">
                  <div className="text-3xl font-extrabold text-gray-600">Hey there!</div>
                  <p className="section-padding">
                    I'm Preston. Since 2013, I've been investing in Memphis real estate and have expanded to properties in three states. My passion lies in turning houses into homes and creating win-win opportunities for everyone involved. 
                    <br/>
                    <br/>
                    Whether you're a wholesaler with a property to sell or an individual looking for a smooth and fair transaction, I'm here to help. I focus on making the process simple, transparent, and tailored to your needs, with integrity at the heart of everything I do. 
                    <br/>
                    <br/>
                    Let's connect and explore how we can work together.
                  </p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li><span className="pro-title"> Name </span> <span className="pro-detail">Preston Wallace</span></li>
                      <li><span className="pro-title"> Phone </span> <span className="pro-detail">901-609-5412</span></li>
                      <li><span className="pro-title"> e-mail </span> <span className="pro-detail"><a href="mailto:prestonbuysmemphis@gmail.com">prestonbuysmemphis@gmail.com</a></span></li>
                      
                    </ul>
                  </div>
                  
                </div>
              </div>   
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 max-w-4xl mx-auto">

          <h2 className={`text-3xl font-bold mb-6 text-center`} id="why-choose-us">Why Work With Me?</h2>
          <ul className="list-disc pl-6 mb-8 space-y-4">
            <li className="text-lg"><strong>Experience You Can Count On:</strong> With years of experience in real estate, I've built a track record of fair deals and win-win outcomes. My focus is on creating solutions that work for you.</li>
            <li className="text-lg"><strong>Integrity in Every Interaction:</strong> I value honesty, clear communication, and respect. You can trust that when I make an offer, it's rooted in fairness and backed by my commitment to delivering on my word.</li>
            <li className="text-lg"><strong>A Simple Process:</strong> Selling a property can feel overwhelming, but it doesn't have to be. I specialize in making the process smooth, fast, and stress-free.</li>
          </ul>

          <h2 className={`text-3xl font-bold mb-6 text-center`}>What Sets Me Apart?</h2>
          <p className="text-lg mb-8">
            I understand that selling a property is more than just a transaction—it's a major decision. That's why I take the time to listen to your needs and tailor solutions to meet your unique situation.
          </p>
          <p className="text-lg mb-8">
            Whether you're looking to close quickly, avoid the hassle of repairs, or simply explore your options, I'm here to help. When you work with me, you're not just selling a property—you're gaining a partner who truly cares about your goals.
          </p>

          <h2 className={`text-3xl font-bold mb-6 text-center`}>Let's Talk</h2>
          <p className="text-lg mb-8">
            If you're ready to sell or just want to learn more, I'd love to connect. Let's discuss how we can work together to make your real estate journey smooth and successful.
          </p>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors">
              Contact Me
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Preston" />

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
