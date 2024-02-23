import React from 'react'
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
    return (
        <div className="flex items-center justify-between pb-2">
            <div>
                <h2 className="text-gray-600 font-semibold">{props.name}</h2>
            </div>
            <div>
                <Link to={props.link} className="bg-sky-500 px-4 py-2 rounded text-white">{props.btnName}</Link>
            </div>
        </div>
    );
}

export default BreadCrumb;