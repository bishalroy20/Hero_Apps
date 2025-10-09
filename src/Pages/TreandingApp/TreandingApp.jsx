import React from 'react';
import Card from '../Card/Card'
import { Suspense } from 'react';
import { Link } from 'react-router';

const TreandingApp = ({data}) => {
    
    return (
        <div className='mt-15'>
            <h1 className='text-black text-center text-4xl font-bold'>Treanding Apps</h1>
            <p className='text-[#627382] text-center mt-6'>Explore All Trending Apps on the Market developed by us</p>

            <Suspense
              fallback={
                <div className="flex justify-center items-center min-h-[300px]">
                  <span className="loading loading-spinner text-purple-500 text-xl">Loading...</span>
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {data?.map((app) => (
                  <Card key={app.id} app={app} />
                ))}
              </div>
            </Suspense>

            <Link to='/AppList'>
                <div className="text-center my-8 " >
                    <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10" >
                      Show All
                    </a>
                  </div>
            </Link>
                </div>
    );
};

export default TreandingApp;