/* For default data to be used in project: */

import CrwnClothing from "../assets/images/crwn_clothing_landing.png";
import Codalorians from "../assets/images/codalorians.png";
import PixelDraw from "../assets/images/pixel_draw.png";
import Postbook from "../assets/images/postbook.png";
import RoboSearch from "../assets/images/robo_search.png";
import Turtle from "../assets/images/turtleBeach.jpg";
import AirBNB from "../assets/images/AirBNB.png";
import Amazon from "../assets/images/Amazon.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Netflix from "../assets/images/Netflix.png";
import hike from "../assets/images/hike.jpeg";
import turtle from "../assets/images/turtleBeach.jpg"
import fort1 from "../assets/images/FortBragg1.jpeg"

export const NavbarData = [

  {
    title: 'Home',
    path: '/',
    /* icon: <AiIcons.AiFillHome />, */
    cName: 'nav-text',
    activeObject: null,
    id: 1,
},

{
    title: 'About',
    path: '/about',
    /* icon: <AiIcons.AiOutlineUser />, */
    cName: 'nav-text',
    activeObject: null,
    id: 2,
    img: `${hike}`
},

 {
    title: 'Developer',
    path: '/developer',
   /*  icon: <FaIcons.FaProjectDiagram />, */
    activeObject: null,
    cName: 'nav-text',
    id: 3,
    img: `${fort1}`
},
{
    title: 'UX',
    path: '/ux',
    /* icon: <IoIcons.IoMdPhonePortrait />, */
    cName: 'nav-text',
    activeObject: null,
    id: 4,
    img: `${fort1}`
},
{
    title: 'Contact',
    path: '/contact',
    /* icon: <AiIcons.AiOutlineFilePdf />, */
    cName: 'nav-text',
    activeObject: null,
    id: 5,
    img: `${turtle}`
},

{
  title: 'Resume',
  path: '/resume',
  /* icon: <AiIcons.AiOutlineFilePdf />, */
  cName: 'nav-text',
  activeObject: null,
  id: 6,
  img: `${hike}`
}

]

export const LandingOptions = [

{
    title: 'About',
    path: '/about',
    /* icon: <AiIcons.AiOutlineUser />, */
    cName: 'nav-text',
    activeObject: null,
    id: 2,
    img: `${hike}`
},

 {
    title: 'Developer',
    path: '/developer',
   /*  icon: <FaIcons.FaProjectDiagram />, */
    activeObject: null,
    cName: 'nav-text',
    id: 3,
    img: `${fort1}`
},
{
    title: 'UX',
    path: '/ux',
    /* icon: <IoIcons.IoMdPhonePortrait />, */
    cName: 'nav-text',
    activeObject: null,
    id: 4,
    img: `${fort1}`
},
{
    title: 'Contact',
    path: '/contact',
    /* icon: <AiIcons.AiOutlineFilePdf />, */
    cName: 'nav-text',
    activeObject: null,
    id: 5,
    img: `${turtle}`
},

{
  title: 'Resume',
  path: '/resume',
  /* icon: <AiIcons.AiOutlineFilePdf />, */
  cName: 'nav-text',
  activeObject: null,
  id: 6,
  img: `${hike}`
}

]

export const projects = [
    {
      id: 1,
      title: "Amazon-Clone / Replica",
      tech: "Next.js, Tailwind CSS, Firebase (Firestore), Stripe API, Fake Store API, Vercel, HTML, Redux, React.js, JS",
      cardCoverText: "A full stack replica of the current Amazon build",
      svgImg: `${Amazon}`,
      img: `${Amazon}`,
      alt: "Screenshot of the Amazon, e-commerce replica",
      description: "A responsive, full stack replica of Amazon deployed via Vercel. Users can log into an account, browse items, and initialize checkout with Stripe API integration.",
      techHighlights: [
        "Integrated Fake Store API for product queries and managed app state with Redux",
        "Integrated Stripe API with Firebase (Firestore, NoSQL DB) for user-checkout and data storage",
        "Developed responsive and optimized UI with Tailwind CSS",
        "Produced custom, re-usable functional components that can be used in future builds",
      ],
      links: [
        {text: "Demo", link: "https://trinp-amazon-clone.vercel.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/amazon-clone"}
      ]
    }, 
    {
      id: 2,
      title: "Netflix-Clone / Replica",
      tech: "Next.js, Stripe API, Firebase(Firestore, NoSQL DB), Firebase(Cloud Hosting), CSS, HTML, React.js, Redux, JS",
      cardCoverText: "A partial replica of the current Netflix build",
      svgImg: `${Netflix}`,
      img: `${Netflix}`,
      alt: "Screenshot of the Netflix, e-commerce replica",
      description: "A responsive, full stack replica of the latest Netflix build deployed via Firebase Hosting.  Users can create / log into an account, subscribe to a service / mock a purchase using Stripe API, and browse a collection of films fetched from themoviedb.org.",
      techHighlights: [
        "Integrated Stripe API for successful test / mock transactions via Firebase extensions.  Users may use test-card #: 4242 4242 4242 4242 to mock a transaction",
        "Managed app state via Redux Global Store to compensate for scalability",
        "Designed a responsive, frontend UI with CSS",
      ],
      links: [
        {text: "Demo", link: "https://netflix-clone-897d7.web.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/netflix-clone"}
      ]
    }, 
    {
      id: 3,
      title: "Airbnb-Clone / Replica",
      tech: "Next.js, Tailwind CSS, Mapbox GL, Geolib, HTML, Vercel, React.js, JS",
      cardCoverText: "A replica of the current Airbnb build",
      svgImg: `${AirBNB}`,
      img: `${AirBNB}`,
      alt: "Screenshot of the Airbnb Replica landing page",
      description: "A replica of the recently deployed Airbnb dashboard and query page, complete with a calendar for user-scheduling and an interactable map via Mapbox GL.",
      techHighlights: [
        "Utilized server-side rendering with Next.js to optimize load-times and overall UX",
        "Designed a responsive, frontend UI with Tailwind CSS",
        "Produced custom, re-usable functional components that can be used in future builds",
      ],
      links: [
        {text: "Demo", link: "https://airbnb-clone-tpadilla-edrpd04h9-tpadilla10117.vercel.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/airbnb-clone"}
      ]
    }, 
/* TODO: Need to update with latest build */
    {
      id: 4,
      title: "Crwn Clothing",
      tech: "Sass, CSS, Firebase, HTML, React.js, JS",
      cardCoverText: "An e-commerce for Stylish, Trendy Clothing",
      svgImg: `${CrwnClothing}`,
      img: `${CrwnClothing}`,
      alt: "Screenshot of the e-commerce app for Stylish, Trendy Clothing.",
      description: "A full stack, e-commerce web-application in-progress that will guide users through a simple, easy-to-follow shopping experience for hip/trendy apparel. Users can currently browse a catalog of products, create an account, and sign-out of the application.",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore (NoSQL DB)",
        "Designed frontend UI with Sass and custom CSS",
      ],
      links: [
        {text: "In Development", link: "https://peaceful-edison-ca2461.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/crwn-clothing"}
      ]
    },
    {
      id: 5,
      title: "LinkedIn-Clone",
      tech: "Firebase (Firestore, NoSQL DB), React.js, Redux, JS, Material UI",
      cardCoverText: "A static replica of the LinkedIn Dashboard",
      svgImg: `${LinkedIn}`,
      img: `${LinkedIn}`,
      alt: "Screenshot of the LinkedIn-Replica Dashboard.",
      description: "A full stack, static web-application in which user's can create an account and make posts on an interactable dashbaord",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore",
        "Designed frontend UI with Material UI and CSS",
      ],
      links: [
        /* {text: "In Development", link: "https://peaceful-edison-ca2461.netlify.app/"}, */
        {text: "GitHub", link: "https://github.com/tpadilla10117/linkedin-clone"}
      ]
    },

    {
      id: 6,
      title: "Codalorians",
      tech: "Express.js, JS, HTML, React.js, PostgreSQL, CSS, Node.js, Axios, Stripe, Bootstrap, Heroku, bcrypt",
      cardCoverText: "An e-commerce for Musical Instruments",
      svgImg: `${Codalorians}`,
      img: `${Codalorians}`,
      alt: "",
      description: "A full stack, e-commerce web-application that guides users through an intuitive shopping experience. Users can browse a catalog of items, add/remove items from their cart, make purchases, & create product reviews.",
      techHighlights: [
        "Created API and database with Express.js, Node.js, and PostgreSQL to store and retrieve products",
        "Managed user authentication through bcrypt",
        "Designed frontend UI with Bootstrap CSS and custom CSS frameworks",
        "Developed templates for common elements such as forms to reduce redundancies"
      ],
      links: [
        {text: "Demo", link: "https://afternoon-brook-26059.herokuapp.com/home"},
        {text: "GitHub", link: "https://github.com/2006-cpu/codalorians"}
      ]
    },
    {
      id: 7,
      title: "Pixel Draw",
      tech: "JS, React.js, CSS, Node.js, HTML",
      cardCoverText: "A Simple, Grid-Based, Pixel-Art Creator",
      svgImg: `${PixelDraw}`,
      img: `${PixelDraw}`,
      alt: "An image of an empty grid of blocks surrounded by a colored grid-palette",
      description: "A simple drawing web-application where users can choose from a palette of defined colors and create pixelated art.",
      techHighlights: [
        "Designed frontend UI within React.js library using custom CSS frameworks",
        "Developed custom, interactive buttons using logic based in JS",
      ],
      links: [
        {text: "Demo", link: "https://objective-volhard-a4bd7a.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/pixel_draw/tree/master/my-app"}
      ]
    }, 
    {
      id: 8,
      title: "Post Book",
      tech: "JS, Node.js, Express.js, jQuery, HTML, CSS, Bootstrap",
      cardCoverText: "An App Where Users Can Post Items For Sale",
      svgImg: `${Postbook}`,
      img: `${Postbook}`,
      alt: "A clickable card of an application called `PostBook`",
      description: "A 'Craigslist'-like clone that allows users to post objects for sale.  Users can interact with each other via message and coordinate purchases.",
      techHighlights: [
        "Created a UI with Express.js API and structured the app as a single-page application",
        "Implemented jQuery JS library to handle click events, state management, etc. ",
        "Designed UX with Bootstrap CSS framework"
      ],
      links: [
        {text: "Demo", link: "https://laughing-austin-fe12b7.netlify.app/#"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/strangersThings-PostBook-"}
      ]
    },
    /* TODO: Need to update with latest deploy: */
    {
      id: 9,
      title: "Post Integration",
      tech: "JS, Node.js, Express.js, PostgreSQL, Jest, CSS, HTML, SASS, jsonwebtoken, Axios",
      cardCoverText: "A custom backend for a Tumblr clone",
      svgImg: ``,
      img: `${Turtle}`,
      alt: "An image of post data in JSON format",
      description: "A custom-built API and database intended to serve as the backend for a “Tumblr” clone. Users can create an account as well as view, create, delete, and edit posts with content.",
      techHighlights: [
        "Developed backend logic containing login, logout, register, and routing functionality within a scalable, custom API",
        "Automated unit tests in Jest to test JS, PostgreSQL, and API scripts",
        "Implemented user authentication through bcrypt",
        "Developed user post & tag content generation through CRUD methodology"
      ],
      links: [
        {text: "In Development", link: "https://murmuring-garden-99126.herokuapp.com/api/posts"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/post-integration"}
      ]
    },
    {
      id: 10,
      title: "Robo Search",
      tech: "JS, React.js, HTML, CSS",
      cardCoverText: "An image filter",
      svgImg: `${RoboSearch}`,
      img: `${RoboSearch}`,
      alt: "A clickable card of an application called `Robo Search`",
      description: "A simple application and UI that allows users to browse and filter through images of Robots",
      techHighlights: [
        "Designed UI and UX with custom CSS",
        "Implemented basic filter logic allowing users to search cards"
      ],
      links: [
        {text: "Demo", link: "https://tpadilla10117.github.io/robo_search/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/robo_search"}
      ]
    },
    
  ]