import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ app }) => {
  const { id, title, downloads, ratingAvg, image } = app;

  return (

    <Link to={`/AppDetails/${id}`}>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border overflow-hidden w-full max-w-sm mx-auto">
      <figure className="bg-gray-100 p-4 flex justify-center">
        <img className="h-40 object-contain" src={image} alt={title} />
      </figure>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
       

        <div className="flex items-center justify-between pt-3 border-t border-dashed">
          <span className="text-sm bg-[#f1f5e8] text-[#00d390] py-2 px-4 rounded-2xl flex items-center gap-3 "><FaDownload /> {downloads/10000}M</span>
          <div className="flex items-center gap-1 bg-[#fff0e1] py-2 px-4 rounded-2xl text-yellow-500 font-medium">
            <FaStar /> {ratingAvg} 
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
