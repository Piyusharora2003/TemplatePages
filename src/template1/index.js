import React, { useState } from 'react';

function PageTemp1(props) {
    const data = props.data;
    const [query,setquery] = useState("");
    const [filtereddata,setfiltered] = useState(props.data.content);

    // change to be made # search algo deque push_front when name matches , push_back when meta matches.
    function handlesearch(e){
        e.preventDefault();
        setquery(e.target.value);
        const array = data.content.filter((elem)=>{
            return elem.title.toLowerCase().includes(e.target.value.toLowerCase());
            // || elem.SearchTags.toLowerCase().includes(e.target.value.toLowerCase()) 
        })
        for (let index = 0; index < data.content.length; index++) {
            const element = data.content[index];
            // if not present in the array 
            if(array.find((e)=>{ return e.title === element.title}) === undefined
                && element.SearchTags.toLowerCase().includes(e.target.value.toLowerCase())
            ){
                array.push(element);
            }           
        }
        setfiltered(array);
    }

    return (
        <div className="text-gray-900 pt-8 pr-0 pb-14 pl-0 bg-white  ">
            <div className="w-full pt-4 pr-5 pb-3 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                <div className="flex flex-col items-center sm:px-5 md:flex-row">
                    <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                            <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                                <p className="inline">
                                    <svg className="w-6 h-4 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                                                00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                                                1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                                                0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </p>
                                <p className="inline text-xs font-medium">
                                    {data.category}
                                </p>
                            </div>
                        <div className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                            {data.heading}
                        </div>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <p className="text-xl font-medium inline font-bold">Author:</p>
              <a className="inline text-xl text-sky-600	 font-medium mt-0 mr-1 mb-0 ml-1 underline decoration-sky-600 hover:decoration-blue-400" href={data.authorlink}>{data.author}</a>
              <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1"> {data.uploadDate} </p>
            </div>
                    </div>
                </div>
                    <div className="w-full md:w-1/2">
                        <div className="block">
                            <img
                                src={data.coverimage}
                                className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                                alt={data.coverimagealt}    
                            />
                        </div>
                    </div>
                </div>
                <div className='px-6 bg-white	'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-red-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search"
                        id="default-search" 
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for the perfect tool for you .."
                        value={query}
                        onChange={(e)=>handlesearch(e)}
                      />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                </div>
                <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                    {
                        filtereddata.map((elem,index)=>{
                            try {
                                return (
                                    <div key={index} className="border border-stone-50 p-2 flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                                        <img
                                              src={elem.coverimage}
                                              className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm h-56 btn-"
                                              alt={elem.coverimagealt}
                                        />
                                        <div className="text-lg font-bold sm:text-xl md:text-2xl">
                                            {elem.title}
                                        </div>
                                        <p className="text-sm text-black">
                                            {elem.description.slice(0,210)}
                                        </p>
                                        <div className="pt-2 pr-0 pb-0 pl-0">
                                            <a
                                                className="inline font-medium mt-0 mr-1 mb-0 ml-0 font-bold text-l "
                                                href={elem.navigationLink}
                                                >
                                                    Go to <span className='underline'>{elem.title}</span>
                                            </a>
                                        </div>
                                    </div>
                                )} catch (error) {return null;}
                            })
                    }
                </div>
            </div>
        </div>
    )
}




export default PageTemp1;