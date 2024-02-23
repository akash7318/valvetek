import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

function AllProduct() {

    return (
        <section className='w-full h-dvh overflow-hidden dashboard'>
            <Nav />
            <div className='flex h-full'>
                <Sidebar />
                <div className='w-5/6 nav-with-content bg-gray-100'>
                    <div className='Content_box m-4'>All Product</div>
                </div>
            </div>
        </section>
    );
}

export default AllProduct;