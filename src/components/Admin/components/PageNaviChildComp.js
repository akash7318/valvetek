import React from 'react'
import { Link } from 'react-router-dom';

const PageNaviChildComp = (props) => {
    return (
        <div className={props.addClass + ' page_navi_child'}>
            {props.childrens.map((value, index) =>
                <Link to={value.link} key={index}>
                    <div className={value.addChildClass + ' flex justify-between page_navi hover:bg-sky-100 cursor-pointer transition-all rounded'}>
                        <div className='flex items-center gap-[8px]'>
                            <p className='page_navi_name'>{value.name}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default PageNaviChildComp