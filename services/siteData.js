// To generate SSH keys for github
// ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
// https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


// Import for react font awesome icons ----------------
// -- view icon library here => https://react-icons.github.io/react-icons/icons?name=fa
  import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaBtc, FaTwitter } from "react-icons/fa";
// ----------------------------------------------------

//Import images for project cards here ----------------
// -- ideally all images should have similar porportions
  import recrootBox from "../public/images/recrootBox_site.png";
  import currence   from "../public/images/currence.png"
  import keyboard   from "../public/images/keyboard.png"
  import sloth      from "../public/images/sloth.png"
// ----------------------------------------------------

// Import selfie here ---------------------------------
// -- Selfie should be square (e.g. 300 X 300 px)
  import selfie     from "../public/images/puppy.png"
// ----------------------------------------------------

// Google Analytics Tracking ID -----------------------
  const googleAnalyticsId = null
// ----------------------------------------------------


// Edit Call To Action Button -------------------------
  let callToActionTitle = "All about dogs!";
  let callToActionLink = "https://en.wikipedia.org/wiki/Dogv"
  let renderCallToAction =  true;
// ----------------------------------------------------

// Background color for project cards -----------------
  let accent = "#7a202c"
// ----------------------------------------------------

// Edit person info here ------------------------------
// -- Bio is best kept to around 5 lines
  let firstName = "Dog";
  let lastName = "Woofer";
  let title = "Pro Barker";
  let bio = `Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof Woof woof woof woof woof `;
// ----------------------------------------------------


// Set useIcons here ----------------------------------
// -- if true, icons show, if false, link name shows
  let useIcons = true;
// ----------------------------------------------------

// Edit resume and social links here ------------------
// -- (github, linkedIn, leetcode, resume, etc.)
  let links = [
    {
      name: "Email",
      link: "mailto:trevor@trevorlane.net",
      icon: FaBtc 
    },
    {
      name: "GitHub",
      link: "https://github.com/trevorhere",
      icon: FaGithub

    },
    {
      name: "Resume",
      link: '/assets/Resume.pdf',
      icon: FaFileAlt
    },
    {
      name: "Twitter",
      link: 'https://twitter.com/hiTrevorHere',
      icon: FaTwitter
      
    }
  ];
// ----------------------------------------------------



// Edit project cards here -----------------------------
// -- including  changing title, image title, and link
  let projectSectionTitle = "Recent Projects"
  let projectCardData = [
    {
      imageUrl: sloth,
      title: "Sloths Are Great",
      description: "But they are slow",
      link: "https://en.wikipedia.org/wiki/Sloth",
      links: [{
        title: "Sloth Toys",
        link: "https://www.amazon.com/sloth-toys/s?k=sloth+toys",
      }],
      tags: ["sloth", "toy", "slow"]
    },
    {
      imageUrl: sloth,
      title: "Sloths Are Great",
      description: "But they are slow",
      link: "https://en.wikipedia.org/wiki/Sloth",
      links: [{
        title: "Sloth Toys",
        link: "https://www.amazon.com/sloth-toys/s?k=sloth+toys",
      }],
      tags: ["sloth", "toy", "slow"]
    },
    {
      imageUrl: sloth,
      title: "Sloths Are Great",
      description: "But they are slow",
      link: "https://en.wikipedia.org/wiki/Sloth",
      links: [{
        title: "Sloth Toys",
        link: "https://www.amazon.com/sloth-toys/s?k=sloth+toys",
      }],
      tags: ["sloth", "toy", "slow"]
    },
    {
      imageUrl: sloth,
      title: "Sloths Are Great",
      description: "But they are slow",
      link: "https://en.wikipedia.org/wiki/Sloth",
      links: [{
        title: "Sloth Toys",
        link: "https://www.amazon.com/sloth-toys/s?k=sloth+toys",
      }],
      tags: ["sloth", "toy", "slow"]
    },
    {
      imageUrl: sloth,
      title: "Sloths Are Great",
      description: "But they are slow",
      link: "https://en.wikipedia.org/wiki/Sloth",
      links: [{
        title: "Sloth Toys",
        link: "https://www.amazon.com/sloth-toys/s?k=sloth+toys",
      }],
      tags: ["sloth", "toy", "slow"]
    },
    {
      imageUrl: currence,
      title: "Currence",
      description: "Twitter clone built using React.js, Serverless, & AWS",
      link: "https://currence.netlify.com/",
      links: [{
        title: "Client Source",
        link: "https://github.com/trevorhere/currence_client"
      },{
        title: "Server Source",
        link: "https://github.com/trevorhere/currence_server"
      }],

      tags: ["react", "serverless", "node", "aws"]
    },
    {
      imageUrl: keyboard,
      tags: ['3D Print, Build, DIY'],
      title: "DIY Keyboard Build",
      description: "Custom built Dactyl-Manuform 5X7",
      links: [{
          title: "Post",
          link: "/post/keyboardBuild",
        }]
    },
    {
      imageUrl: sloth,
      tags: ['sloths','blog'],
      title: "A Cool Post About Sloths",
      description: "Sloths are a group of arboreal Neotropical xenarthran mammals",
      links: [{
          title: "My Post",
          link: "/post/slothBlogPost",
        }]
    }
  ];
// ----------------------------------------------------


// Post content imports here --------------------------
// markdown  guide => https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  import {keyboardPostText} from './posts/keyboard_build'
  import {slothBlogPostText} from './posts/slothBlogPost.js'
// ----------------------------------------------------

// Add blog post data here -----------------------------
  let posts = [
    {
    id: "keyboardBuild",
    tags: ['3D Print, Build, DIY'],
    dateTime: "test",
    date: "09/26/2021",
    readingTime: "10 min",
    title: "DIY Keyboard Build",
    content: keyboardPostText,
    href: "https://i.imgur.com/ZLe9N4s.png",
    author: {
      href: "https://avatars.githubusercontent.com/u/15148900",
      name: "Trevor Lane",
      imageUrl: "https://avatars.githubusercontent.com/u/15148900"
    }
  },
   {
    id: "slothBlogPost",
    tags: ['sloth', 'cool'],
    dateTime: "test",
    date: "11/15/1985",
    readingTime: "50 min",
    title: "A Cool Post About Sloths",
    content: slothBlogPostText,
    href: "https://i.imgur.com/ZLe9N4s.png",
    author: {
      href: "https://twitter.com/hiTrevorHere",
      name: "Dog Woofer",
      imageUrl: "https://avatars.githubusercontent.com/u/64881350?s=400&u=d8af5e4738888d61888b2b04cbbb84039af90aff&v=4"
    }
  }
  
  ]
// ----------------------------------------------------
   

// DONT EDIT THIS SECTION
  const paths = {  // generates routes for each post automatically
    paths: posts.map(post => {
        return {params: {id: post.id}}
      }),
    
    fallback: true,
  }
// ----------------------------------------------------


// EXPORTS, DONT EDIT UNLESS YOU KNOW WHAT YOU ARE DOING 
  export {
    firstName,
    lastName,
    title,
    bio,
    projectSectionTitle,
    projectCardData,
    selfie,
    links,
    useIcons,
    accent,
    callToActionLink,
    callToActionTitle,
    renderCallToAction,
    posts,
    paths,
    googleAnalyticsId
  };  
// ----------------------------------------------------
