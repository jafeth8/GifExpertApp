import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball'];
    
    
    const [categories, setcategories] = useState(['One Punch','Samurai X','Dragon Ball'])

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
                categories.map(element=>{
                  return <li key={element}>{element}</li>
                })
              }
          </ol> 
          
        </>
    )
}
