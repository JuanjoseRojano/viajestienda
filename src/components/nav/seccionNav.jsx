import { useState } from 'react'

function SeccionNav(props) {
    return (
        <div onClick={props.onClick} className="flex items-center space-x-3 gap-2  hover:bg-gray-700 rounded-lg transition-all cursor-pointer m-2">
            <img
                src={props.imagenNav}
                alt={props.nombreSeccionNav}
                className="w-10 h-10 rounded-full"
            />
            <p className="text-white text-lg font-medium">{props.nombreSeccionNav}</p>
        </div>

    )
}

export default SeccionNav;
