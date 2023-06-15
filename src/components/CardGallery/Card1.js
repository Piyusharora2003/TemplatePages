import React from 'react'
// props = [title,description,image,category,metaTags]
function Card1(props){
    const title = props.title || "Title not specified";
    const description = props.description || "Description not specifiedtemplate is a pre-designed format or layout that serves as a starting point for creating various documents or projects.";
    const image = props.image || "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXJyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
    const category = props.category.name || "Category not specified";
    const metaTags = props.metatags || ["Tag1","Tag2","Tag3","Tag4"];
    console.log(props);
  return (
    <div className="container flex justify-center">
      <div className="max-w-sm py-2">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img className="rounded-t-lg" src={image} alt={description} />
          <div className="pt-3 pb-6  px-8 rounded-lg bg-white">
            <h1 className="text-gray-700 font-bold text-2xl mb-2 hover:text-gray-900 hover:cursor-pointer">{title}</h1>
            <div className="text-gray-700 text-lg mb-2 hover:text-gray-900 cursor-default">{description}</div>
            <div className='mt-4'>
            {
                metaTags.map((tag, index) => {
                    return <span key={index} 
                            className="px-2 py-1 me-3 bg-slate-100">
                                                {tag}
                                </span>
                                })
                            }
            </div>
          </div>
          <div className="absolute top-2 right-2 py-1 px-2 text-gray-800 bg-gray-300 rounded-lg">
            <span className="text-md">{category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1