import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GridGif = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(()=> {
        //getGifs();
        getGifs(category)
            .then((img)=>{setImages(img)})
    },[category])
        
    return (
        <>
            <h3>{category}</h3>
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
