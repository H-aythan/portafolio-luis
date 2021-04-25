import React from 'react'

const Header = ({mover}) => {
    return (
        <>
        <header className="flex z-10 justify-between px-5 flex-wrap items-center w-full text-white ">
            <p className=" md:text-3xl">Luis Miguel</p>
            <p className=" md:text-2xl">luis.m.ja0516@gmail.com</p>
            <div className="flex-grow flex md:hidden mt-5 w-full">
                <button className="flex-grow bg-orange-500 hover:bg-orange-400 h-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(1)}>Postres</button>
                <button className="flex-grow bg-orange-500 hover:bg-orange-400 h-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(2)}>Salados</button>
                <button className="flex-grow bg-orange-500 hover:bg-orange-400 h-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(3)}>Panaderia</button>
            </div>
        </header>
        <div className="hidden w-screen md:w-10/12 mb-5 md:h-4/6 mt-20 md:flex flex-wrap justify-center">
            <div className="w-1/4 relative md:flex rounded-lg justify-center" style={{background:"url(/img/donas.jpg)",backgroundPosition:"center"}}>
                <p className="w-full h-10 bg-blueGray-800 bg-opacity-30 px-2 pt-1 text-3xl font-serif absolute top-0 text-white">Postres</p>
                <button className="absolute bg-orange-500 hover:bg-orange-400 bottom-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(1)}>Ver mas</button>
            </div>
            <div className="relative rounded-lg w-1/4 h-full mx-8 md:flex items-center justify-center text-blueGray-900"  style={{background:"url(/img/salados.jpg)",backgroundPosition:"60%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <p className="w-full h-10 bg-blueGray-800 bg-opacity-30 px-2 pt-1 text-3xl font-serif absolute top-0 text-white">Salados</p>
                <button className="absolute bg-orange-500 hover:bg-orange-400 bottom-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(2)}>Ver mas</button>
            </div>
            <div className="relative w-1/4 object-fill bg-top rounded-lg md:flex justify-center" style={{backgroundImage:"url('/img/canillas.png')",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <p className="w-full h-10 bg-blueGray-800 bg-opacity-30 px-2 pt-1 text-3xl font-serif absolute top-0 text-white">Panaderia</p>
                <button className="absolute bg-orange-500 hover:bg-orange-400 bottom-10 p-1 px-4 text-white focus:outline-none" onClick={()=>mover(3)}>Ver mas</button>
            </div>

        </div>
        </>
    )
}

export default Header
