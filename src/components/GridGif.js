import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GridGif = ({category}) => {

    
    const {data:images,loading}=useFetchGifs(category)
    console.log("cargando componente");
     
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading?<p className="animate__animated animate__flash" >loading..</p>:null}
            <div className="card-grid">
            
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id} 
                        //img={img}
                        {...img}
                        />
                    ))
                }
            
            </div>

        </>
        
    )
}
