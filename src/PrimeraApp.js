// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'


//FC

const PrimeraApp = ({
    saludo,
    subtitulo = 'Mi primera Aplicación'
}) => {
    if (!saludo) {
        throw new Error('El saludo es necesario')
    }

    // const saludo = {
    //     nombre: 'Sebatian',
    //     edad: 34
    // };
    return (
        // <Fragment>
        //     <h1>Hola Mundo</h1><p>Mi primera Aplicación</p>
        // </Fragment>
        <>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre><p>Mi primera Aplicación</p> */}

            <h1>{saludo}</h1><p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera Aplicación'
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp