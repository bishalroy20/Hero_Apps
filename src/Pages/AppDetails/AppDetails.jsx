import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Data2.json')
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp || null);
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalled(foundApp ? installedApps.includes(foundApp.id) : false);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load app data:', err);
        setLoading(false);
      });
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (loading) {
    return <p className="text-gray-500 p-6">Loading app details...</p>;
  }

  if (!app) {
    return <p className="text-red-500 p-6">App not found</p>;
  }

  return (
    <div className="p-6">
        <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row items-center gap-6 text-black ">
        <img src={app.image} alt={app.title} className="lg:w-[350px] lg:h-[350px]" />
        <div>
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p>Developed By <span className='text-blue-600 font-bold'> {app.companyName}</span></p>
    
    <ToastContainer />
          <p>{app.downloads.toLocaleString()} downloads</p>
          <p>{app.reviews} reviews</p>
          <p>⭐ {app.ratingAvg}</p>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-4 py-2 rounded ${installed ? 'bg-gray-400' : 'bg-purple-600 text-white'}`}
          >
            {installed ? 'Installed' : 'Install'} ({app.size}MB)
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2 text-black">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={app.ratings}
                layout="vertical" // This flips the axes
                margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
            >
                <XAxis type="number" />         {/* Now shows count */}
                <YAxis dataKey="name" type="category" /> {/* Now shows star labels */}
                <Tooltip />
                <Bar dataKey="count" fill="#ff8811" />
            </BarChart>
        </ResponsiveContainer>

      </div>

      <div className="mt-6">
        <h2 className="text-xl text-black font-semibold mb-2">Description</h2>
        <p className='text-black '>{app.description}</p>
      </div>
    </div>
  );
}
