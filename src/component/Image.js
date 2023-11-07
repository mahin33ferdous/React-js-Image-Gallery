import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Image = ({images,handleCheckbox,isChecked,onDragEnd}) => {
    
 // Style class for hover effect
 const containerClass = `absolute h-full w-full bg-black/20 flex justify-items-start items-start top-0 rounded-lg  opacity-0 group-hover:opacity-100 transition-all duration-300`;


         return (
             <DragDropContext onDragEnd={onDragEnd}>
               <Droppable droppableId="droppable">
                  {(provided) => (
    <div {...provided.droppableProps} ref={provided.innerRef}>
                <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">
                    <div class="grid grid-flow-row-dense lg:grid-cols-5 grid-rows-3 md:grid-cols-4 grid-cols-2 gap-4">

                                   {images.map((image,index)=>(
                                <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                                {(provided) => (
                               <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                     className={` image ${index === 0 ? 'col-span-2 row-span-2 h-96 p-2 ' : ' w-48 h-5/6  p-2 '}`}
                               >

                             <div class="w-full h-full group ">
                                <div class="relative overflow-hidden w-full h-full">
                                  <img class="h-full w-full object-cover border  border-gray-950 rounded-lg " src={image.img} alt=""/>
                                       <div   className={`${containerClass} ${!!isChecked.find(item=>item===image.id)? 'opacity-100' : 'opacity-0'}`}>
                                       <button className='m-4 '> <input
                                            type="checkbox"
                                           checked={isChecked.includes(image.id)}
                                          onChange={() =>handleCheckbox (image.id)} className='h-6 w-6 accent-blue-600 '/></button>
                                     </div>
  
                                </div>

                            </div>

                        </div>
                  
            )}

   </Draggable>
 
  ))}

                 {provided.placeholder}
                  <div className='w-48 h-5/6  p-2  border border-dashed border-gray-950 rounded-lg flex  items-center'>
                      <div className='p-12'>
                         <FontAwesomeIcon icon={faImage} size="1.5x" color="gray" className='pb-4'/>
                       <h4 className='text-gray-800 font-semibold ' >Add Photo</h4>
                     </div>
                 </div>
           </div>
       </div>
   </div>

 )}
   </Droppable>
    </DragDropContext>

    );
};

export default Image;