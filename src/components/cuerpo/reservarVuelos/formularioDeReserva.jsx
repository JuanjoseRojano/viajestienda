import { useState, useRef, use, useEffect } from 'react'
import { comprarBilletes } from '../../../funcionalidades/obtenerAPI';
import SelectViajes from '../../selectViajes';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Boton from '../../Boton'

import useManejoBilletes from '../../../hooks/useManejoBilletes'
import usePrecioDeLosBilletes from '../../../hooks/usePrecioDeLosBilletes'
import useClassNameError from '../../../hooks/useClassNameError'



function FormularioDeReserva(props) {

    const nombreDestino = useRef(null)
    const nombreSalida = useRef(null)
    const imagenDestino = useRef(null)
    const horaDeSalida = useRef(null)
    const diaSemana = useRef(null)
    const precioDeBilleteFinal = useRef(null)
    const precioOriginal = useRef(null)

    const [errorDeFormulario, setErrorDeFormulario] = useState(null)
    const { precioDeLosBilletes, añadirIVA } = usePrecioDeLosBilletes()
    const { manejoBilletes, sumar, resta } = useManejoBilletes()

    const classNameError = useClassNameError(errorDeFormulario);

    useEffect(() => {
        añadirIVA(manejoBilletes, props.element.precio)
    }, [manejoBilletes])



    function realizarCompra(e) {
        e.preventDefault()
        comprarBilletes(
            props.usuarios,
            props.setUsuarios,
            props.usuarioConectado,
            props.setUsuarioConectado,
            nombreDestino,
            nombreSalida,
            imagenDestino,
            horaDeSalida,
            diaSemana,
            precioDeBilleteFinal,
            manejoBilletes,
            precioOriginal,
            setErrorDeFormulario
        )
    }

    return <>

        <div className="bg-white p-6 rounded-xl border-2 border-gray-300 shadow-lg max-w-md w-full text-center m-4">
            <form onSubmit={realizarCompra} className="flex flex-col gap-4">
                <h1 className={classNameError}>{errorDeFormulario}</h1>
                <h1 ref={nombreDestino} className="text-2xl font-semibold text-gray-800">{props.element.destino}</h1>
                <img
                    src={props.element.imagen}
                    alt={props.element.destino}
                    ref={imagenDestino}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="flex flex-col gap-4 m-3">

                        <select ref={nombreSalida} className="p-2 border border-gray-300 rounded-md text-lg" required>
                            <SelectViajes opciones={props.element.salida} />
                        </select>

                        <select required ref={horaDeSalida} className="p-2 border border-gray-300 rounded-md text-lg">
                            <SelectViajes opciones={props.element.horariosDeVuelo} />
                        </select>

                        <select required ref={diaSemana} className="p-2 border border-gray-300 rounded-md text-lg">
                            <SelectViajes opciones={props.element.diasDeLaSemana} />
                        </select>

                    </div>

                    <div className="flex flex-col gap-4 m-3">
                        <div className='flex justify-center items-center space-x-2'>
                            <p className="text-lg font-medium text-gray-700">Precio billete:</p>

                            <h1 ref={precioOriginal} className='flex items-center p-1 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-xl'>{props.element.precio}</h1>
                        </div>

                        <div>
                            <Boton nombreBoton="-" funcionBoton={resta} type={"button"} />
                            <h1>{manejoBilletes}</h1>
                            <Boton nombreBoton="+" funcionBoton={sumar} type={"button"} />

                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <p className="text-lg font-medium text-gray-700">Precio final:</p>
                            <div className='flex items-center p-1 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 border-solid rounded-xl'>
                                <h1 ref={precioDeBilleteFinal} className="text-lg font-medium text-gray-700">{precioDeLosBilletes}</h1>
                                <p className="ml-1">€</p>
                            </div>
                        </div>
                    </div>

                </div>




                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-lg transition duration-300">
                    Comprar
                </button>
            </form>
        </div >    </>


}

export default FormularioDeReserva