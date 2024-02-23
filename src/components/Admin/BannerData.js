import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import BannerDataComp from './components/BannerDataComp';

function BannerData() {

    return (
        <section className='w-full h-dvh overflow-hidden dashboard'>
            <Nav />
            <div className='flex h-full'>
                <Sidebar />
                <BannerDataComp />
            </div>
        </section>
    );
}

export default BannerData;