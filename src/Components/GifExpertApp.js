import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['']) ;

    return (
        <>
                <h2>GifExpertApp</h2>
                <hr></hr>
                <AddCategory setCategorias = { setCategorias }/>      
                <hr/>
                <ol>
                    { categorias.map( category => (
                        <GifGrid key={category} category={category}/>                     
                     ))
                    }
                </ol>
                
        </>

    )
}


export default GifExpertApp;