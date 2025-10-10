import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import HeroApp from '../../Components/HeroApp/HeroApp';
import TreandingApp from '../TreandingApp/TreandingApp';
import Loading from '../../Components/Loading/Loading';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Data1.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading message="Loading homepage..." />;

  return (
    <div>
      <Banner />
      <HeroApp />
      <TreandingApp key={data.id} data={data} />
    </div>
  );
};

export default Home;
