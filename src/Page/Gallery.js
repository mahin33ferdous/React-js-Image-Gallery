import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Image from '../component/Image';

const Gallery = () => {

    const[images,setImages]=useState([])
    const[isChecked,setisChecked]=useState([]);

    // fetch data from local json file
    useEffect(()=>{
        fetch('Image.json')
       // fetch('products.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])


    // selection functionality with checkbox input 
     const handleCheckbox = (imageID) => {
        if (isChecked.includes(imageID)) {
          setisChecked(isChecked.filter(id => id !== imageID));
        } else {
          setisChecked([...isChecked, imageID]);
         }
       };
  
  
      // Delection functionality of selected files
      const handleDelete = () => {
        const updatedItems = images.filter(img => !isChecked.includes(img.id));
        setImages(updatedItems);
        setisChecked([]); 
      };

     
      const dragImage = useRef(null);
      const draggedOverImage = useRef(null);

      // reordering of images after doing drag and drop 
      const handleSorting = () => {
        if (dragImage.current == null || draggedOverImage.current == null) {
          return
        }
        if (dragImage.current == null || draggedOverImage.current == null) {
            return
          }
          const draggedImageInstance = [...images]
          const temp = draggedImageInstance[dragImage.current]
          draggedImageInstance.splice(dragImage.current, 1)
          draggedImageInstance.splice(draggedOverImage.current, 0, temp);
      
          dragImage.current = draggedOverImage.current
      
          draggedOverImage.current = null;
      
      
          setImages(draggedImageInstance)
      };

      

    return (
        <div className='divide-y p-4 font-custom'>

      {
           isChecked?.length? // condition rfor showing selection tesxt

           <> <div className='flex justify-between text-2xl font-bold p-4'>
                  <div className='flex p-2'>
                         <input type="checkbox" className='h-8 w-8 accent-blue-600 me-2' checked readOnly ></input>
                        <h2>{isChecked.length} Files selected</h2>
                  </div>
                         <h2 className='text-red-600 ' onClick={handleDelete}>delete files</h2>
             </div>
          </>

        :
        
        <div className='text-start text-2xl font-bold p-4'> <h2 > Gallery</h2> </div>
       
        }
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">
                    <div className="grid grid-flow-row-dense lg:grid-cols-5 grid-rows-3 md:grid-cols-4 grid-cols-2 gap-6 ">
                      {images.map((image, index) =>
                      <Image key={image.id} 
                       image={image} 
                       isChecked={isChecked} 
                       index={index} 
                       handleSorting={handleSorting}
                       dragImage={dragImage}
                       draggedOverImage={draggedOverImage}
                       handleCheckbox={handleCheckbox}
            />
          )}
                  <div className='w-48 h-5/6  p-2  border border-dashed border-gray-950 rounded-lg flex  items-center'>
                      <div className='p-12'>
                         <FontAwesomeIcon icon={faImage} size="1x" color="gray" className='pb-4'/>
                       <h4 className='text-gray-800 font-semibold ' >Add Photo</h4>
                     </div>
                 </div>
             </div>
         </div>


</div>
  
    );
};

export default Gallery;
