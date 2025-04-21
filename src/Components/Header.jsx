import React from 'react';
import Logo from '../assets/Images/Logo.svg';
import provile from '../assets/Images/provile.svg';
import HeaderItem from './HeaderItem';
import { GiNetworkBars } from "react-icons/gi";
import { FaDatabase, FaLinux } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: FaHome,
            href : '#home'
        },
        {
            name: 'DMJ',
            icon: GiNetworkBars,
            href : '#jaringan'
        },
        {
            name: 'SBD',
            icon: FaDatabase,
            href : '#data'
        },
        {
            name: 'OS',
            icon: FaLinux,
            href : '#sistem'
        }
    ]
    return (
        <div>
            <div className="fixed top-0 left-0 p-5 flex items-center space-x-4">
                <img src={Logo} alt="Logo" className="h-12 w-12 object-cover" />
                <a className>Network Laboratory</a>
            </div>
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 p-5 flex items-center space-x-4">
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon} href={item.href} />
                ))}
            </div>
            <div className="fixed top-0 right-0 p-5 flex items-center space-x-4">
                <img src={provile} alt="Logo" className="h-14 w-14 object-cover" />
                <e>RakaFadh</e>
            </div>
        </div>
    );
}

export default Header;