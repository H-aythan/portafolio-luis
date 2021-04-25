import {useRef } from "react"
import './components/stilos.css'
import Header from "./components/Header"
import SectionArticle from "./components/SectionArticle"
import {infoPostres,infoPanes,infoSaladitos}from './data/Data';

const App=()=>{
    const seleccion1=useRef();
    const seleccion2=useRef();
    const seleccion3=useRef();
    
    const mover=(id)=>{
        switch (id) {
            case 1:
                seleccion1.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            case 2:
                seleccion3.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            default:
                seleccion2.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
        }
    }
    
    return(
         <>
            
            <div className="border-box overflow-x-hidden" >
            <div className="bg-gray-900 h-screen w-screen fixed " style={{zIndex:"-20",filter:"brightness(50%)",backgroundImage:"url('/img/palmeras.jpg')",backgroundRepeat:"repeat",backgroundSize:"cover",backgroundPosition:"center" }}></div>
            
            <div className=" w-screen md:h-screen flex justify-center flex-wrap" >
                <Header mover={mover}/> 
            </div>
            
            <SectionArticle seleccion={seleccion1} info={infoPostres} inverso={false} titulo="Postres"/>
            <SectionArticle seleccion={seleccion3} info={infoSaladitos} inverso={true} titulo="Saladitos"/> 
            <SectionArticle seleccion={seleccion2} info={infoPanes} inverso={false} titulo="Panaderia"/>
            
        </div>
        </>   
    );
}




export default App;
