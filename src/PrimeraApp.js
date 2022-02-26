// import React, { Fragment } from 'react';
import React from 'react';


//FC

const PrimeraApp = () => {
    // const saludo = {
    //     nombre: 'Sebatian',
    //     edad: 34
    // };
    const saludo = 'Hola mundo'
    return (
        // <Fragment>
        //     <h1>Hola Mundo</h1><p>Mi primera Aplicación</p>
        // </Fragment>
        <>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre><p>Mi primera Aplicación</p> */}

            <h1>{saludo}</h1><p>Mi primera Aplicación</p>
        </>
    );
}

export default PrimeraApp