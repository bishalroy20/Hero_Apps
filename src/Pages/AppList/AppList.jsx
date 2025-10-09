import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Suspense } from 'react';
import Card from '../Card/Card';
import App_Error from '../../assets/App-Error.png'
import { Link } from 'react-router-dom';


const AppList = () => {
    
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter apps 
  const filteredApps = data?.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    
    <div className="max-w-7xl mx-auto">
      
      {filteredApps.length !== 0 ?
        <div className="mt-15">
            <h1 className="text-black text-center text-4xl font-bold">Our All Applications</h1>
            <p className="text-[#627382] text-center mt-6">
            Explore All Apps on the Market developed by us. We code for Millions
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 mt-8">
            
            <p className="text-gray-600 font-semibold text-3xl ">
                <span className="font-semibold text-purple-600">({filteredApps.length})</span> apps found
            </p>

            <input
                type="text"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[400px] px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 border border-black text-black"
            />
            </div>

            {/* App Cards */}
            <Suspense
            fallback={
                <div className="flex justify-center items-center min-h-[300px]">
                <span className="loading loading-spinner text-purple-500 text-xl">Loading...</span>
                </div>
            }
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {filteredApps?.map((app) => (
                <Card key={app.id} app={app} />
                ))}
            </div>
            </Suspense>
        </div>:
        <div className=' my-10 '>
            <img className='flex justify-center mx-auto' src={App_Error} alt="" />

            <div>
                <h1 className='font-semibold text-[48px] text-black text-center'>OPPS!! APP NOT FOUND</h1>
                <p className='font-medium text-[20px] text-gray-600 text-center'>The App you are requesting is not found on our system. please try another apps </p>    
            </div>

            <Link to='/AppList'>
                <div className="text-center my-8 " >
                    <a onClick={() => setSearchTerm('')} className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10" >
                      Show All
                    </a>
                  </div>
            </Link>
        </div>
}
    </div>
  );
};

export default AppList;
