import React from 'react';

function HeaderItem({ name, Icon, href }) {
    return (
        <a
            href={href}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#870345] hover:text-white"
        >
            <Icon className="text-xl" />
            <span className="text-lg">{name}</span>
        </a>
    );
}

export default HeaderItem;