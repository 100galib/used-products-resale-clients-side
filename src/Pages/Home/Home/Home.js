import React from 'react';
import Advartize from '../Advartize/Advartize';
import HomeBanner from '../Banner/HomeBanner';
import Categorys from '../Categorys/Categorys';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Advartize></Advartize>
            <Categorys></Categorys>
            <Offer></Offer>
        </div>
    );
};

export default Home;