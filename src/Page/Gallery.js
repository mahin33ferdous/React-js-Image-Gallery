import React, { useEffect, useRef, useState } from 'react';
import Image from '../component/Image';

const Gallery = () => {

    const[images,setImages]=useState([])

    useEffect(()=>{
        fetch('Image.json')
       // fetch('products.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])

    return (
        <div className='divide-y p-4 font-custom'>
         <div className='flex justify-between text-2xl font-bold'>
         <div className='flex p-2'>
            <input type="checkbox" className='h-8 w-8 accent-blue-600 me-2' checked></input>
            <h2>Files selected</h2>
         </div>

           <h2 className='text-red-600 '>delete files</h2>
     </div>

     <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">
    <div class="grid grid-flow-row-dense grid-cols-5 grid-rows-3 ">

         <Image images={images}></Image>
        </div>
    </div>
     </div>
    );
};

export default Gallery;