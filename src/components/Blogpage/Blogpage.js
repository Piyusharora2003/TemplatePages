import React from 'react';
import styles from "./style.module.css";
import { BlogPageContent } from '../../data';

function Blogpage() {
  return (
    <div className="mx-auto max-w-xl px-3 pb-5 pt-3 sm:px-5 sm:pt-4 lg:max-w-6xl lg:px-7  ">
    {/* Tags  */}
      <div className='flex flex-row mb-2'>
        {
          BlogPageContent.tags.map((tag,index)=>{
              return <p key={index} className={`pe-2 text-purple-600 font-semibold	text-lg	`}
                      > {tag} </p>
          })
        }
      </div>

        {/* TITLE */}
        <div className={`text-5xl pb-1 font-bold sm:w-full 	${styles.title}`}>
          {BlogPageContent.title}
        </div>

        {/* Metatitle */}
        <div className={` text-lg pt-2 ps-1 sm:w-full md:w-9/12 text-slate-800		 `}>
          {BlogPageContent.metatitle}
        </div>

        {/* Cover image */}
        <img src={BlogPageContent.image} className='object-cover rounded-lg sm:max-h-96 sm:w-full md:w-9/12 m-6 ms-1 h-full'/>

        {/* Content --> combination of text , images(optional), title */}
        {
          BlogPageContent.content.map((block,index)=>{
              return <div className='px-2 pt-5 w-11/12'>
                        <div className={`text-3xl w-5/6 mb-1 ps-2 font-bold ${styles.contentTitle}`}>
                            {block.title}
                        </div>
                        { 
                            block.image && 
                              <img src={block.image}
                                loading="lazy"
                                className='py-3 w-96 aspect-video'
                               />
                          }
                      
                        <div className='text-xl font-medium	ps-2'>
                          {block.description}
                        </div>

                     </div>
          })

        }
    </div>
  )
}

export default Blogpage;