import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import ProjectList from './components/projectList'
import *  as siteData from '../services/siteData'
import {FaPenNib, FaArrowDown} from "react-icons/fa"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className="width-screen h-1" >
        <div className="z-20 fixed top-5 right-5 pr-10 lg:pr-20 sm:bottom-5 ">
            { siteData.renderCallToAction && <button
              type="button"
              className="flex flex-row absolute items-center px-1 py-1 border-2 border-black text-xs font-medium rounded  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
              // className={`accent-bg accent-bg-hover inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white `}
              onClick={() => router.push(siteData.callToActionLink)}
            > 
            {/* <style>{`.accent-bg{ background-color:${siteData.accent};} .accent-bg-hover:hover{ opacity: .7;}`}</style> */}
                {siteData.callToActionTitle} 
            </button>
            }
        </div>
      </div>
      <div className="z-0 flex mt-100 w-screen fixed  h-screen items-center content-center mx-auto sm:px-6 lg:px-8 ">
      <div className="flex flex-col max-w-4xl mt-6 mx-auto items-center">
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="flex-shrink-0 self-center w-36">
            <Image 
              {...siteData.selfie}
              className="rounded-full" 
              placeholder="blur"
              onClick={() => router.push('/')}
              alt="Picture of the author"
            />
          </div>
          <div className="mx-4">
            <h4 className="text-4xl font-bold">{siteData.firstName} {siteData.lastName}</h4>
            <h4 className="text-2xl font-thin">{siteData.title}</h4>
          </div>
        </div>
        <div className="my-6  text-md sm:text-xl mx-3 text-justify">
          <p>{siteData.bio}</p>
        </div>
        <div className=" mt-6 z-30 text-xl">
          <p className="flex flex-row">{siteData.links.map(link => { 
            return siteData.useIcons 
            ? <link.icon 
                key={link.link} 
                alt={link.link} 
                onClick={()=> router.push(link.link)}
                className="mx-2 fill-current text-gray-500 hover:text-black" href={link.link}>
                  {link.name}
              </link.icon>
            : <a className="mx-2 hover:underline" key={link.link} href={link.link}>{link.name}</a>
          })}
          </p>
        </div>
        <div className="mt-12 sm:mt-56 text-gray-500">
          <FaArrowDown /> 
        </div>
      </div>
    </div>
   <div className="accent-bg z-30 flex mt-10 absolute slider-up w-full min-h-screen items-center content-center  mx-auto sm:px-6 lg:px-8  lg:.slider_up_small ">
     <ProjectList accentColor={siteData.accent} projects={siteData.projectCardData} selfie={siteData.selfie}/> 
     <style jsx>{`.accent-bg{background-color: ${siteData.accent}} .slider-up {margin: 100vh auto 0;} .a .slider_up_small{margin: 200vh auto 0;}`}</style>
   </div>
   </>

  )
}
