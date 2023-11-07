import React, { useEffect, useRef, useState } from 'react';
import Image from '../component/Image';

const Gallery = () => {

    const[images,setImages]=useState([])
    const[isChecked,setisChecked]=useState([]);

    useEffect(()=>{
        fetch('Image.json')
       // fetch('products.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])

    const handleCheckbox = (imageID) => {
        if (isChecked.includes(imageID)) {
          setisChecked(isChecked.filter(id => id !== imageID));
        } else {
          setisChecked([...isChecked, imageID]);
         }
       };
  
  
      
      const handleDelete = () => {
        const updatedItems = images.filter(img => !isChecked.includes(img.id));
        setImages(updatedItems);
        setisChecked([]); 
      };

      const onDragEnd = (result) => {
        if (!result.destination) return; // If dropped outside the list
    
        const reorderedItems = Array.from(images);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);
    
        setImages(reorderedItems);
      };



    return (
        <div className='divide-y p-4 font-custom'>

{
           isChecked?.length?
           <> <div className='flex justify-between text-2xl font-bold p-4'>
            <div className='flex p-2'>
            <input type="checkbox" className='h-8 w-8 accent-blue-600 me-2' checked></input>
          <h2>{isChecked.length} Files selected</h2>
            </div>

        <h2 className='text-red-600 ' onClick={handleDelete}>delete files</h2>
           </div>
          </>
        :<div className='text-start text-2xl font-bold p-4'> <h2 > Gallery</h2> </div>
       
        }


         <Image 
         images={images}
         
         handleCheckbox={handleCheckbox}
         handleDelete={handleDelete}
         isChecked={isChecked}
         onDragEnd={onDragEnd}
        

         
         ></Image>
        </div>
  
    );
};

export default Gallery;