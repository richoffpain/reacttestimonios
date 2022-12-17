import React from 'react';
import './Testimonios.css';


//Creacion del componente 
// para señalar el uso de javascript usamos las llaves
function Testimonios(props){


    return (
        <div className='contenedorTestimonios'>
            <img
               src={require(`./imagenes/test-${props.imagen}.png`)}
               alt='Logo'
               className='imagenTestimonios'
            
            />
            <div className='contenedorTextos'>
                <p className='nombre'>
                  <strong>{props.nombre} </strong>  en {props.pais}  
                </p>
                <p className='cargo'>
                {props.cargo} en {props.empresa}
                </p>
                <p className='feedback'>
                {props.feedback}
                </p>
                    
            </div>
            
        </div>
    );
}


// exportacion del componente creado
export default Testimonios;





















