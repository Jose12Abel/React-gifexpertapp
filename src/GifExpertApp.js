import React, { useState } from 'react'
import { Addcategory } from './components/Addcategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categorias, setcategorias] = useState(['Dragon Ball']);

   //const handleAdd = () => {

   //    setcategorias([...categorias, 'Jugadores de futbol']);

   //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <Addcategory  setcategorias={setcategorias}/>
            <hr />

            
            <ol>
                {
                    categorias.map( category => (

                       < GifGrid 
                            key={category}
                            category ={ category }
                        />

                    ))
                }
            </ol>
        </div>
    )

}

