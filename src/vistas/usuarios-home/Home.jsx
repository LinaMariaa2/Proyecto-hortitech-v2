import React from 'react'
import HeaderHome from '../../componentes/usuarios-home/HeaderHome.jsx'
import MainHome from '../../componentes/usuarios-home/MainHome.jsx'
import FooterHome from '../../componentes/usuarios-home/FooterHome.jsx'
import Login from '../../componentes/usuarios-home/login.jsx';

const Home = () => {
    return (
        <div>
            <HeaderHome/>
            <MainHome/>
            <FooterHome/>
        </div>
);
};

export default Home;
