import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';
import { products } from "../../data";


export default function Home() {
    return (
      <div className="bg-white">
                <Helmet>
                    <title>Templates Collection</title>
                </Helmet>
                
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Templates List </h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className=" w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                  <img
                    loading="lazy"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover  lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h2 className="font-bold">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h2>
                    <div>
                        {product.feature}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }