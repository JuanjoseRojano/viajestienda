import { useState } from 'react'

function Muestras(props) {
    return (<>

        {/* Cuerpo de la tarjeta */}
        <div className="p-4 w-3/5">
            {/* Título (Categoría) */}
            <h6 className="text-gray-500 mb-4 uppercase font-semibold text-sm">
                startups
            </h6>

            {/* Título principal */}
            <h4 className="text-gray-800 mb-2 font-semibold text-xl">
                Lyft launching cross-platform service this week
            </h4>

            {/* Descripción */}
            <p className="text-gray-500 mb-8 text-base">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story.
            </p>

            {/* Botón "Learn More"
            <a href="#" className="inline-block">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </a> */}


        </div></>
    );




}

export default Muestras
