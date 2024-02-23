import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import './components/PageNaviComp.css';
import PageNaviChildComp from './components/PageNaviChildComp';

function PageNaviComp(props) {

    const [isActive, setIsActive] = useState(props.addClass ? true : false);

    const openChild = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='w-full'>
            <Link to={props.link} >
                <div className={props.addClass + ' flex justify-between  page_navi hover:bg-sky-100 cursor-pointer transition-all rounded'} onClick={props.hasChild ? openChild : null}>
                    <div className='flex items-center gap-[8px]'>
                        <span className='opacity-50'>{props.icon}</span>
                        <p className='page_navi_name'>{props.name}</p>
                    </div>
                    {
                        props.hasChild
                            ?
                            <span className='float-right opacity-50 rotate-90'><ChevronRightIcon /></span>
                            :
                            null
                    }
                </div>
            </Link>
            {
                props.hasChild
                    ?
                    <PageNaviChildComp addClass={isActive ? "active" : ""} childrens={props.childrens} />
                    :
                    null
            }
        </div>
    );
}

export default PageNaviComp