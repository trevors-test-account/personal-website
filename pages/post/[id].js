import React from 'react';
import {useRouter} from 'next/router'
import *  as siteData from '../../services/siteData'
import {FaPencilAlt} from 'react-icons/fa'
import {Converter} from 'showdown';


export async function getStaticPaths() {
  return  siteData.paths;
}

export async function getStaticProps({params}) {
  const {id} = params;
  const post = siteData.posts.find(post => post.id === id);

  if(!post){
    return {
      props: {
        post: null, content: null
      }
    }
  }

  const converter = new Converter({ metadata: true });
  let content = converter.makeHtml(post?.content);
  const meta = converter.getMetadata();
  return { props: { id, post, content, meta } }
}

export default function Post({post, content}) {
  const router = useRouter()

  return (
    <>
      <div className="flex justify-end" >
        <button 
          type="button" 
          className="mt-7 mr-7 px-1 py-1 border-2 border-black text-xs font-medium rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
          onClick={() => router.push('/')}
        >
          Back 
        </button>

      </div>
      <div className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto flex-initial">
      <div className="relative py-8 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg mx-auto flex flex-row justify-between">
            <div>
              <h1>
                <span className="mt-2 block text-3xl  leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {post?.title} 
                </span>
              </h1>
              <p>
                {post?.tags.map((tag,i) => {
                  return <span key={i}>{`${tag.trim()}${i !== post?.tags.length - 1 ? ', ' : ''}`}</span>
                })}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={post?.author.href}>
                <span className="sr-only">{post?.author.name}</span>
                <img className="h-10 w-10 rounded-full" src={post?.author.imageUrl} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={post?.author.href} className="hover:underline">
                  {post?.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post?.datetime}>{post?.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post?.readingTime} read</span>
              </div>
            </div>
          </div>

            <div className="flex my-8 ">
              <img
                className=" mx-auto rounded-lg " 
                src={post?.imageUrl}
                alt=""
                layout="cover"
              />
            </div> 
            <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>

      </div>
    </>
  )
}
