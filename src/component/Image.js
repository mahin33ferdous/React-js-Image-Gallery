import React from 'react';


const Image = ({image,handleCheckbox,isChecked, index,  handleSorting, dragImage, draggedOverImage }) => {
    
 // Style class for hover effect
 const containerClass = `absolute h-full w-full bg-black/20 flex justify-items-start items-start top-0 rounded-lg  opacity-0 group-hover:opacity-100 transition-all duration-300`;


         return (
           
               <div
                  draggable
                  onDragStart={() => (dragImage.current = index)}
                  onDragEnter={() => { draggedOverImage.current = index; handleSorting() }}
                  onDragEnd={() => dragImage.current = null}
                  onDragOver={(e) => e.preventDefault()}
                  className={` image ${index === 0 ? 'col-span-2 row-span-2 h-96 p-4 ' : ' w-48 h-5/6  p-4 '}`}

              >
                  <div className="w-full h-full group ">
                            <div className="relative overflow-hidden w-full h-full">
                                  <img className="h-full w-full object-cover border  border-gray-950 rounded-lg " src={image.img} alt=""/>
                                    <div   className={`${containerClass} ${!!isChecked.find(item=>item===image.id)? 'opacity-100' : 'opacity-0'}`}>
                                       <button className='m-4 '> <input
                                            type="checkbox"
                                           checked={isChecked.includes(image.id)}
                                          onChange={() =>handleCheckbox (image.id)} className='h-6 w-6 accent-blue-600 '/></button>
                                    </div>
  
                            </div>

                    </div>

   </div>


    );
};

export default Image;