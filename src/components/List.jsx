import React from 'react'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'


export default function List({column,tasks}) {
    return (
        <div className="border mr-2 w-screen h-screen bg-black-200"
            style={{
                backgroundColor:'#81E3EA',
                display:"flex",
                flexDirection:"column"
            }}>


            <h3 className='text-white mt-2 font-bold'>{column.title}</h3>
           
            <Droppable droppableId={column.id} type='1'>
             {(provided, snapshot) => 

                  (
                    
                    <div style={{ padding:'8px',flexGrow:1,minHeight:'300px' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                        
                         {
                             tasks.map((t,i)=>{
                             return <Task key={t.id} task={t} index={i} />
                             })
                         }
          
                    {provided.placeholder}
                </div>
                )
                
            }
            </Droppable>



            
        </div>
    )
    
}