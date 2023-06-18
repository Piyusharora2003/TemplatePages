// import React from 'react'
// // props = [title,description,image,category,metaTags]
// function Card1(props){
//     const title = props.title || "Title not specified";
//     const description = props.description || "Description not specifiedtemplate is a pre-designed format or layout that serves as a starting point for creating various documents or projects.";
//     const image = props.image || "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXJyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
//     const category = props.category.name || "Category not specified";
//     const metaTags = props.metatags || ["Tag1","Tag2","Tag3","Tag4"];
//     console.log(props);
//   return (
//     <div className="container flex justify-center">
//       <div className="max-w-sm py-2">
//         <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
//           <img className="rounded-t-lg" src={image} alt={description} />
//           <div className="pt-3 pb-6  px-8 rounded-lg bg-white">
//             <h1 className="text-gray-700 font-bold text-2xl mb-2 hover:text-gray-900 hover:cursor-pointer">{title}</h1>
//             <div className="text-gray-700 text-lg mb-2 hover:text-gray-900 cursor-default">{description}</div>
//             <div className='mt-4'>
//             {
//                 metaTags.map((tag, index) => {
//                     return <span key={index} 
//                             className="px-2 py-1 me-3 bg-slate-100">
//                                                 {tag}
//                                 </span>
//                                 })
//                             }
//             </div>
//           </div>
//           <div className="absolute top-2 right-2 py-1 px-2 text-gray-800 bg-gray-300 rounded-lg">
//             <span className="text-md">{category}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card1

export default function Card1(props) {
	// console.log(props);
	const data = {
		image : props.image || "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		imagealt:props.category.name+ " blog ",
		category: props.category.name ||"Category not specified",
		title: props.title ||"The Majestic and Wonderful Bahamas",
		description: props.description || "description not specified",
	}

  return (
	<div className="relative flex border-solid border-2 border-sky-500 mb-4 flex-col lg:flex-row md:space-x-5 space-y-3 lg:space-y-0 rounded-xl shadow-lg p-2.5 max-w-xs lg:max-w-3xl mx-auto border border-white bg-white">
		<div className="w-full lg:w-1/3 bg-white grid place-items-center">
			<img src={data.image} alt={data.imagealt} className="rounded-xl object-cover w-full" />
    	</div>
		<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
			<div className="flex justify-between item-center">
				<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 lg:block">
					{data.category} </div>
			</div>
			<h3 className="font-black text-gray-800  text-xl">{data.title}</h3>
			<p className=" text-gray-500 text-base">{data.description}</p>
			
		</div>
	</div>
  )
}

// CardH.prototype = {
	// Add props type
// }

