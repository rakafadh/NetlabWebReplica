import React from 'react';
import DMJLogo from '../assets/Images/DMJLogo.svg';

function Jaringan() {
    return (
        <div>
            <div className="container flex items-center space-x-4">
                <div>
                    <img
                        src={DMJLogo}
                        className="w-20 h-20"
                    />
                </div>
                <div>
                    <c>
                        Welcome to Desain Manajemen Jaringan
                    </c>
                </div>
            </div>
            <div className="text-justify">
                <d>
                Desain manajemen jaringan adalah proses perencanaan dan pengorganisasian infrastruktur jaringan komputer untuk memastikan efisiensi, keandalan, dan keamanan jaringan. Ini melibatkan pemilihan teknologi, perangkat, topologi, protokol, dan standar yang sesuai dengan kebutuhan organisasi. 
                </d>
            </div>
        </div>
    );
}

export default Jaringan;