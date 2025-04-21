import React from 'react';
import OSLogo from '../assets/Images/OSLogo.svg';

function Sistem() {
    return (
        <div>
            <div className="container flex items-center space-x-4">
                <div>
                    <img
                        src={OSLogo}
                        className="w-20 h-20"
                    />
                </div>
                <div>
                    <c>
                        Welcome to Sistem Operasi
                    </c>
                </div>
            </div>
            <div className="text-justify">
                <d>
                Sistem operasi (operating system/OS) adalah perangkat lunak dasar yang mengontrol dan mengatur semua perangkat keras (hardware) dan perangkat lunak (software) pada komputer. OS berfungsi sebagai perantara antara pengguna dan perangkat keras, memungkinkan pengguna untuk berinteraksi dengan komputer dan menjalankan berbagai program aplikasi. 
                </d>
            </div>
        </div>
    );
}

export default Sistem;