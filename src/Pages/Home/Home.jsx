import React from 'react';
import Banner from '../../Components/Banner/Banner'
import HeroApp from '../../Components/HeroApp/HeroApp'
import TreandingApp from '../TreandingApp/TreandingApp';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            <HeroApp></HeroApp> 

            <TreandingApp key={data.id} data={data}></TreandingApp>

        </div>
    );
};

export default Home;