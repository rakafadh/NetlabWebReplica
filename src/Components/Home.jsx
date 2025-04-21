import React from 'react'

function Home() {
    return (
        <div className="flex items-center space-x-4">
            <div>
                <img 
                    src="../src/assets/Images/mario.jpg" 
                    className="w-20 h-20 object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col text-left space-y-1">
                <b>HELLO PRAKTIKAN</b>
                <b>MAU BELAJAR APA HARI INI</b>
            </div>
        </div>
    )
}

export default Home