import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

export const GifExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball'];
    
    
    const [categories, setcategories] = useState(['no game no life'])

    /*
    const handleAdd=()=>{
        //let nuevoValor=categories.push('Hunter x Hunter');
        //setcategories(nuevoValor)
        //categories.push('Hunter x Hunter')
        //console.log(categories)

        //setcategories([...categories,'Hunter x Hunter'])
        setcategories(cats=>[...cats,'Hunter x Hunter'])
    };
    */
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setcategories={setcategories}/>
          <hr/>
          <ol>
              {
                categories.map(element=>(<GridGif key={element} category={element}/>))
              }
          </ol> 
        </>
    )
}
