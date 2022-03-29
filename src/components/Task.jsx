import React from 'react'
import linkSvg from '../assets/link.svg'
import {Draggable} from "react-beautiful-dnd";

export default function Task({task,index}) {
    return (
        <Draggable draggableId={task.id} index={index}>
        {
            (provided, snapshot) => {
              const style = {
                backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white',
                //...provided.draggableProps.style,
              };
              return (
                <div className="card mb-2"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps} > 

              
                  {/* <!-- Card --> */}
                    <a class="rounded-sm grid bg-white shadow px-2 items-center hover:shadow-lg duration-300 flex justify-items-start" href="#">
                   
                      {/* <!-- Title --> */}
                      <p class="text-black font-semibold"> {task.content}</p>
                      
                      {/* <!-- Description --> */}
                      <p class="text-sm text-gray-800 font-light">{task.description}</p>

                      {/* Link */}
                      <a href={task.URL} class="h-5 w-5 justify-self-end" target="_blank">
                        <img src={linkSvg}  fill="none" viewBox="0 0 24 24" stroke="#2563eb"/>
                      </a>

                    </a>

                </div>
              )
            }
        }
      </Draggable>
    );
}
