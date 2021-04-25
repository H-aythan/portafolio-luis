import React, { useState } from 'react'

import Carrousel from './Carrousel';
import './slide/slick.css';
import './slide/slick-theme.css';

const SectionArticle = ({info,titulo,seleccion,inverso}) => {
    
    const [imagen,setImagen]=useState(info[0]?.img);
    const [name,setName]=useState(info[0]?.name);
    const [ingredientes, setIngredientes]=useState(info[0]?.info);
    const [id,setId]=useState("");
    
    const cambioImagen=(img,nombre,ingrediente,ide)=>{
        setImagen(img)
        setName(nombre)
        setIngredientes(ingrediente)
        setId(ide);
    }
    
    return (
        <section className="w-screen h-screen m-auto flex justify-center mt-10 flex-wrap mb-20 " ref={seleccion}>
        <div className="w-full pb-10 flex justify-around flex-wrap ">
            <p className="text-white underline text-5xl w-full text-center mb-5">{titulo}</p>
            <Carrousel info={info} inverso={inverso} cambioImagen={cambioImagen} identificador={id}/>
        </div>
        <div className="text-white  w-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-5">
            <p className="md:w-1/3 text-3xl  md:text-7xl flex-grow">{name}</p>
            <img className="rounded-xl mx-10 md:h-96 object-scale-down max-h-96" alt="img" src={imagen}/>
            <div className="md:w-1/3 mt-5 ">
                <p className="text-xl md:text-3xl mb-5">Ingredientes</p>
                <ul className=" flex-grow text-sm md:text-xl  text-justify">
                    {ingredientes?.map((item,i)=>{
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
            
    </section>
    )
}

export default SectionArticle
