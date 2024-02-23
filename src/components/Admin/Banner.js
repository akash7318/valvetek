import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import BannerComp from './components/BannerComp';

function Banner() {

    return (
        <section className='w-full h-dvh overflow-hidden dashboard'>
            <Nav />
            <div className='flex h-full'>
                <Sidebar />
                <BannerComp />
            </div>
        </section>
    );
}

export default Banner;