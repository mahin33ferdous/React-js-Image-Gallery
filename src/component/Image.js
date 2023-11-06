import React from 'react';

const Image = ({images}) => {
    return (
        <div>
            {images.map((image,index)=>(<div 
            key={image.id}
        className={` image ${index === 0 ? 'col-span-2 row-span-2 h-96 p-2 ' : ' w-48 h-5/6  p-2 '}`}
        >
                            <div class="w-full h-full group ">
<div class="relative overflow-hidden w-full h-full">
  <img class="h-full w-full object-cover border  border-gray-950 rounded-lg " src={image.img} alt=""/>

       </div>
       </div>

</div>
                                 

           ))}   
        </div>
    );
};

export default Image;