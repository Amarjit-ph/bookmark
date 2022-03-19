import React from 'react'
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
                    <div className="p-1" style={style}>
                        <p className='m-0'> Id : {task.id}</p>
                      <p className='m-0'> {task.content} </p>
                    </div>
                  
                </div>
              )
            }
        }
      </Draggable>
      
        
    )
}
