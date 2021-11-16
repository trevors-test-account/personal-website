// To generate SSH keys for github
// ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
// https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


// Import for react font awesome icons ----------------
// -- view icon library here => https://react-icons.github.io/react-icons/icons?name=fa
  import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// ----------------------------------------------------

//Import images for project cards here ----------------
// -- ideally all images should have similar porportions
  import recrootBox from "../public/images/recrootBox_site.png";
  import currence   from "../public/images/currence.png"
  import keyboard   from "../public/images/keyboard.png"
// ----------------------------------------------------

// Import selfie here ---------------------------------
// -- Selfie should be square (e.g. 300 X 300 px)
  import selfie     from "../public/images/trevor.png"
// ----------------------------------------------------

// Google Analytics Tracking ID -----------------------
  const googleAnalyticsId = "UA-69073529-2"
// ----------------------------------------------------


// Edit Call To Action Button -------------------------
  let callToActionTitle = "Blog";
  let callToActionLink = "https://blog.trevorlane.dev"
  let renderCallToAction = true;
// ----------------------------------------------------

// Background color for project cards -----------------
  let accent = "#003344"
// ----------------------------------------------------

// Edit person info here ------------------------------
// -- Bio is best kept to around 5 lines
  let firstName = "Trevor";
  let lastName = "Lane";
  let title = "Software Engineer";
  let bio = `Currently enjoying life as a husband and father. During the day I work as a software engineer at Breeze Aviation.
  Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;
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
      icon: FaEnvelope
    },
    {
      name: "GitHub",
      link: "https://github.com/trevorhere",
      icon: FaGithub

    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hi-there-trevor-here/",
      icon: FaLinkedin

    },
    {
      name: "Resume",
      link: '/assets/Resume.pdf',
      icon: FaFileAlt
    }
  ];
// ----------------------------------------------------



// Edit project cards here -----------------------------
// -- including  changing title, image title, and link
  let projectSectionTitle = "Recent Projects"
  let projectCardData = [
    {
      imageUrl: recrootBox,
      title: "Recroot Box",
      description: "Easy to user porfolio-site template",
      link: "https://github.com/trevorhere/recrootBox/",
      links: [{
        title: "Live",
        link: "https://github.com/trevorhere/recrootBox/",
      }],
      tags: ["react.js", "next.js", "tailwind", "netlify"]
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
    }
  ];
// ----------------------------------------------------


// Post content imports here --------------------------
// markdown  guide => https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  import {keyboardPostText} from './posts/keyboard_build'
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
  }]
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
