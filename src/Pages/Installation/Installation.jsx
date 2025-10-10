import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Downloads from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Loading from '../../Components/Loading/Loading';

export default function Installation() {
  const [appsData, setAppsData] = useState([]);
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load appsData from public folder
  useEffect(() => {
    fetch('/Data2.json')
      .then((res) => res.json())
      .then((data) => {
        setAppsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load apps data:', err);
        setLoading(false);
      });
  }, []);

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
    const filtered = appsData.filter(app => stored.includes(app.id));
    setInstalledApps(filtered);
  }, [appsData]);

  // Sort installed apps by size
  useEffect(() => {
    let result = [...installedApps];

    if (sortOrder === 'asc') {
      result.sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.downloads - a.downloads);
    }

    setFilteredApps(result);
  }, [installedApps, sortOrder]);

  // Uninstall app handler
  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated.map(app => app.id)));
    toast.info('App uninstalled successfully');
  };

  if (loading) return <Loading message="Loading installed apps..." />;

  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Title Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-3xl font-bold text-gray-700">
            {filteredApps.length} Apps Found
          </p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600"
          >
            <option value="default">Sort By Download Count</option>
            <option value="asc">Downloads: Low to High</option>
            <option value="desc">Downloads: High to Low</option>
          </select>
        </div>
      </div>

      {/* App Cards */}
      <div className="max-w-5xl mx-auto space-y-4">
        {filteredApps.length === 0 ? (
          <p className="text-gray-500">No apps installed yet.</p>
        ) : (
          filteredApps.map(app => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              {/* App Info */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {`${app.title} : ${app.description}`}
                  </h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <img src={Downloads} alt="Downloads" className="h-4 w-4" />
                      <span>{app.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={Rating} alt="Rating" className="h-4 w-4" />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
