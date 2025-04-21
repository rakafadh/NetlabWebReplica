import React from 'react';
import SBDLogo from '../assets/Images/SBDLogo.svg';

function Data() {
    return (
        <div>
            <div className="container flex items-center space-x-4">
                <div>
                    <img
                        src={SBDLogo}
                        className="w-20 h-20"
                    />
                </div>
                <div>
                    <c>
                        Welcome to Sistem Basis Data
                    </c>
                </div>
            </div>
            <div className="text-justify">
                <d>
                Sistem basis data adalah sebuah sistem yang digunakan untuk mengumpulkan, menyimpan, mengelola, dan mengakses data secara terstruktur dan efisien. Sistem ini melibatkan perangkat lunak (Database Management System - DBMS), basis data itu sendiri, dan program aplikasi yang berinteraksi dengan keduanya. 
                </d>
            </div>
        </div>
    );
}

export default Data;