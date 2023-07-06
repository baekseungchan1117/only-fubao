import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';


import './Heading.css'

export default function Heading() {
    const location = useLocation();
    const navigate = useNavigate();

    let headerName;
    switch (location.pathname) {
        case '/':
            headerName = 'Home';
            break;
        case '/shop':
            headerName = 'Shop';
            break;
        case '/community':
            headerName = 'Community';
            break;
        default:
            headerName = 'Home';
    }

    const goToElement = (element) => {
        navigate('/', { state: { scrollTo: element } });
    };

    return (
        <div className='inner'>
            <div className='header'>
                <div className='header_Sub_Category'>
                    <div className='Logo'>fuobao</div>
                    <div className='header_name'>{headerName}</div>
                    <div className='login'>
                        <RouterLink to={"/signup"} style={{ color: "black", textDecoration: "none" }}>회원가입 </RouterLink>
                        <RouterLink to={"/login"} style={{ color: "black", textDecoration: "none" }}>로그인</RouterLink>
                    </div>
                </div>
                <div className='header_Sub'>
                    <button onClick={() => goToElement('today_ranking')} className='link'>HOME</button>
                    <button onClick={() => goToElement('introduce')} className='link'>ABOUT</button>
                    <RouterLink to="/shop" className='link'>SHOP</RouterLink>
                    <RouterLink to="/community" className='link'>COMMUNITY</RouterLink>
                    <button onClick={() => goToElement('location_map')} className='link'>CONTACT</button>
                </div>
            </div>
        </div>
    );
}
