import { useState } from 'react'
import DestinoAleatorio from './destinoAleatorio'
import viajando from '../../media/viajando.jpg'
import Muestras from './muestras'
import Prueba from '../prueba'
import Login from '../logearUsuario/login'
import ReservarViajes from './reservarVuelos/reservarViajes'
import TusViajes from './tusViajes'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useNavigate } from "react-router-dom";

function Cuerpo(props) {




    return <>


        <Routes>
            <Route path="/" element={<Navigate to="/inicio"></Navigate>} />
            <Route path="/inicio" element={<>
                <div className="relative">
                    <img src={viajando} className="w-full h-auto" />

                    <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/100 to-transparent"></div>

                </div>
                <DestinoAleatorio viajes={props.viajes}></DestinoAleatorio>

                <div className="max-w-[48rem] w-full flex flex-row bg-white shadow-lg rounded-lg overflow-hidden">

                    <div className="w-2/5 shrink-0">
                        <img
                            src="https://blog.oxfamintermon.org/wp-content/uploads/2018/12/viajes-alternativos-2.jpg"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <Muestras viajes={props.viajes} />
                </div>
            </>} />



            <Route path='/LogIn' element={<Login usuarioConectado={props.usuarioConectado} setUsuarioConectado={props.setUsuarioConectado} usuarios={props.usuarios} setUsuarios={props.setUsuarios} />} />
            <Route path='/TusViajes' element={<TusViajes usuarioConectado={props.usuarioConectado} viajes={props.viajes} />} />
            <Route path="/ReservarViajes" element={<ReservarViajes usuarios={props.usuarios} setUsuarios={props.setUsuarios} usuarioConectado={props.usuarioConectado} setUsuarioConectado={props.setUsuarioConectado} viajes={props.viajes} />} />
            <Route path="/GestionarViajes" element={<Prueba />} />


        </Routes>



    </>


}

export default Cuerpo
