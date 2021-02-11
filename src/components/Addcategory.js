//import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const Addcategory = ({setcategorias}) => {
   
   const [InputValue, setInputValue] = useState('');

   const handleImputChange= ( e ) => {
       setInputValue(e.target.value);
   }

    const handleSumit = (e) => {

        e.preventDefault();

        if(InputValue.trim(). length > 2 ){

            setcategorias(cats => [ InputValue, ...cats])
            setInputValue('');

        }
        //console.log('submit hecho')
        
    }
    return (
        <form onSubmit={ handleSumit }>
            <input
                type="text"
                value={ InputValue }
                onChange={ handleImputChange }
            />
        </form>
    )
}

Addcategory.propTypes = {
     
    setcategorias: PropTypes.func.isRequired

}