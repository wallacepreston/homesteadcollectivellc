import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/PostList"
import Testimonial from "../components/Testimonial"
import WhyItem from "../components/WhyItem"
import GetFree from "../components/GetFree"
import YouTubeVideo from "../components/YouTubeVideo"

const testimonials = [
  {
    name: 'Stephanie Stampher',
    social: 'stephaniestampher',
    quote: "I would not be where I am today as a software engineer without Preston's mentorship and guidance."
  },
  {
    name: 'Jean Leconte II',
    social: 'jean-leconte-ii',
    quote: "I've learned a ton from Preston and recommend if anyone reading this has the opportunity to work with him in any capacity they should take it!",
  },
  {
    name: 'Hugo Campos',
    social: 'o6nh',
    quote: "I am continuously impressed by Preston's ability to convince newer coders to keep soldiering on. He provides a positive energy that tends to boost morale.",
  },
  {
    name: 'Laurence Parmentier-Reeds',
    social: 'remoteuxproductmanager',
    quote: "Preston's passion for coding and teaching really translate into his instruction method. He is definitely a great teacher and mentor.",
  },
  {
    name: 'Justin Cook',
    social: 'justin-cook-developer',
    quote: 'Preston is always thorough in his explanations and demonstrates great technical competency.'
  },
  {
    name: 'Yahya Hafez',
    social: 'yahya-hafez',
    quote: "Preston's impressive experience and skill as a developer was consistently highlighted through the deep knowledge of web development he shared."
  },
  {
    name: 'Riley Smith',
    social: 'rileysheldonsmith',
    quote: "Preston is a thoughtful instructor who strives to see his students succeed. He is always happy to work with students at their pace, and help them gain thorough understanding of the curriculum."
  },
  {
    name: 'Tilly Wright',
    social: 'tillywright',
    quote: "Preston's instruction and lessons were really easy to follow as I was building JS projects."
  },
  {
    name: 'Sal Guerrero',
    social: 'sal-guerrero',
    quote: "Preston helped me understand critical programming concepts and further my programming skills. As a result of his teaching I was able to break into tech and find the career of my dreams.",
  },
  {
    name: 'Bienvenido Rodriguez',
    social: 'b17z',
    quote: 'Preston is a gifted Software Engineer and a thought leader in technical education, training, and communication.'
  }
];


// icons come from simple-line-icons https://simplelineicons.github.io/
const whyItems = [
  {
    title: 'Easy to Follow',
    subtitle: 'All of the learning. None of the angst.',  
    description: "Say goodbye to confusing lessons and hello to a simple and beginner-friendly experience with Preston's online coding videos.",
    icon: 'directions',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ',
  },
  {
    borderRadius: '60% 40% 34% 66% / 30% 56% 44% 70%',
    title: 'Fast-track lessons',
    subtitle: 'Accelerate Your Learning',
    description: "Join the Coding Revolution!  Get ahead of the game with Preston's clear and concise lessons that leave out the fluff and get straight to the point.",
    icon: 'rocket',
  },
  {
    title: 'Compassionate Teacher',
    subtitle: "Learn coding with a passion, don't hate it with one.",
    description: "Get inspired and motivated with Preston's passionate teaching style and fun, friendly voice that makes coding a fun and engaging experience.",
    icon: 'heart',
    borderRadius: '30% 70% 43% 57% / 81% 30% 70% 19%',
  },
  {
    title: 'Master the Mindset',
    subtitle: 'Unlock Your Inner Coding Genius',
    description: "Learn from a true expert with Preston's years of experience in the industry and gain valuable tips and tricks that will help you code with confidence.",
    icon: 'bulb',
    borderRadius: '64% 36% 43% 57% / 53% 30% 70% 47%',
  },
  {
    title: 'Fun Videos',
    subtitle: 'Exciting lessons that are fun and Engaging',
    description: "Get excited about coding with Preston's fun and engaging videos that are packed with real-world examples and exercises to help you learn by doing.",
    icon: 'camrecorder',
    borderRadius: '36% 64% 43% 57% / 53% 79% 21% 47%',
  },
  {
    title: 'Prepare for Coding Interviews',
    subtitle: 'Boost Your Career Options with a Job-Ready Education',
    description: "Get ahead of the competition with Preston's in-depth and comprehensive video lessons that are packed with real-world examples and exercises to prepare you for the job.",
    icon: 'briefcase',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  },
];

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <div id="hero-area" className="hero-area-bg">
          <div className="content-container">
            <div className="row">
              <div className="hero-content">
                <div>
                  <h2 className="hero-title">Investing</h2>
                  <div className="script-font with-rules">in</div>
                  <h2 className="hero-title">Communities</h2>
                  <div className="hero-tagline">One Home at a Time. <br/><br/><b>Homestead Collective LLC</b></div>

                  {/* <StaticImage
                    className="hero-avatar"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10', borderRadius: '50%'}}
                  /> */}
                  <br/>

                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-6 text-center`}>About Us</h2>
          <p className="text-lg mb-8">
            At Homestead Collective LLC, we specialize in buying and holding single-family residences (SFRs) to create value for families and investors alike. Our mission is simple: to build strong, stable neighborhoods by providing quality housing while fostering long-term community growth.
          </p>

          <h2 className={`text-3xl font-bold mb-6 text-center`} id="why-choose-us">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-8 space-y-4">
            <li className="text-lg"><strong>Thoughtful Investments:</strong> We take a personalized approach to selecting properties, ensuring they align with our vision for sustainable growth and lasting impact.</li>
            <li className="text-lg"><strong>Community Focused:</strong> Beyond bricks and mortar, we invest in people. Our properties are designed to become homes that enrich the lives of those who live there.</li>
            <li className="text-lg"><strong>Integrity at Our Core:</strong> Transparency and trust drive every decision we make, from purchasing to property management.</li>
          </ul>

          <h2 className={`text-3xl font-bold mb-6 text-center`}>Our Vision</h2>
          <p className="text-lg mb-8">
            We believe in the power of real estate to create secure, thriving communities. With a commitment to holding and improving properties for the long haul, we provide stability in a rapidly changing market.
          </p>

          <h2 className={`text-3xl font-bold mb-6 text-center`}>Let's Build Together</h2>
          <p className="text-lg mb-8">
            Whether you're a homeowner, a real estate partner, or an investor, we invite you to join us in shaping the future of housing—one home at a time.
          </p>

          <div className="text-center">
            <Link to="/sell" className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors">
              Sell Your Home
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { type: { ne: "exclusive" } } }) {
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
              gatsbyImageData(width: 275, height: 175)
            }
          }
        }
      }
    }
  }
`
