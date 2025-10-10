import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Components/Loading/Loading';
import Downloads from '../../assets/icon-downloads.png';
import Rating from '../../assets/icon-ratings.png';
import Review from '../../assets/icon-review.png';


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

  if (loading) return <Loading message="Loading app details..." />;

  if (!app) {
    // return <p className="text-red-500 p-6"></p>;
    return(
      <div >
            <div className='my-12'>
                <img className='flex justify-center mx-auto' src={Error_img} alt="" />

            <div>
                <h1 className='font-semibold text-[48px] text-black text-center'>Oops, page not found!</h1>
                <p className='font-medium text-[20px] text-gray-600 text-center'>The page you are looking for is not available.</p>    
            </div>

            <Link to='/'>
                <div className="text-center my-8 " >
                    <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10" >
                      Go Home
                    </a>
                  </div>
            </Link>
            </div>
        </div>
    )
  }

  return (
    <div className="p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      
     

      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md text-black">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 md:w-[200px] md:h-[200px] object-contain"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-700 mb-1">
            Developed By <span className="text-blue-600 font-semibold">{app.companyName}</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          {/* <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-3 text-sm"> */}


            <div className="flex flex-col items-center gap-2 text-green-600 font-medium text-xl">
              <img src={Downloads} alt="Downloads" className="h-6 w-6" />
             Downloads   <br />
              {app.downloads.toLocaleString()} 
            </div>


            <div className="flex flex-col items-center gap-2 text-yellow-500 font-medium text-xl">
              <img src={Rating} alt="Rating" className="h-6 w-6" />
              Average Ratings <br/>
              {app.ratingAvg} 
            </div>
            <div className="flex flex-col items-center gap-2 text-purple-500 font-medium text-xl">
              <img src={Review} alt="Reviews" className="h-6 w-6" />
              Reviews <br />
              {app.reviews.toLocaleString()}  
            </div>
            {/* </div> */}
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-2 rounded-full font-semibold ${
              installed ? 'bg-gray-400 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {installed ? 'Installed' : 'Install Now'} ({app.size} MB)
          </button>
        </div>
      </div>


      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2 text-black">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <h2 className="text-xl text-black font-semibold mb-2">Description</h2>
        <p className="text-black">{app.description}</p>
      </div>
    </div>
  );
}
