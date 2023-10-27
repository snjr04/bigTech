import React from 'react';
import NewsBanner from "../../Companents/NewsBanner/NewsBanner";
import Companies from '../../Companents/Companies/Companies'
import MapBanner from "../../Companents/MapBanner/MapBanner";


const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <NewsBanner/>
                <Companies/>
                <MapBanner/>
            </div>
        </section>
    );
};

export default Home;