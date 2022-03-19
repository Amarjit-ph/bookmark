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

                  {/* <div className="p-1" style={style}>
                      <p className='m-0'> Id : {task.id}</p>
                      <p className='m-0'> {task.content} </p>
                  </div> */}




                  {/* <!-- Card 1 --> */}
                    <a class="rounded-sm grid bg-white shadow px-2 items-center hover:shadow-lg duration-300 flex justify-items-start" href="#">
                      
                   
                      {/* <!-- Title --> */}
                      <div class="col-span-11">
                        <p class="text-black font-semibold"> {task.content}</p>
                      </div>

                    
                      <div class="col-span-11">
                        <p class="text-sm text-gray-800 font-light">Build a Python app using Django and then deploy the app to App</p>
                      </div>
                      
                      {/* <!-- Description --> */}
                      {/* <div class="md:col-start-2 col-span-11 xl:-ml-5">
                        <p class="text-sm text-gray-800 font-light"> Build a Python app using Django and then deploy the app to App Platform using a Gunicorn HTTP server. </p>
                      </div> */}

                        {/* <!-- Icon --> */}
                        <div class="col-span-12 md:col-span-1">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg> */}
                          <img src={linkSvg} class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" />
                      </div>

                      
                    </a>

                </div>
              )
            }
        }
      </Draggable>
    );
}
