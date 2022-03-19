import React,{useState} from 'react'
import {DragDropContext} from "react-beautiful-dnd";

import initialData from '../initial-data'
import List from './List'

const DragAndDrop = () => {

  const [state,setState] = useState(initialData);


  const onDragEnd = (result) => {
    
    /*  
    ! EXAMPLE : Result Object
    draggableId:'t1',
    source:{index:1,dropableId:"columne-1"}
    destination:{index:4,dropableId:"columne-2"}
    */

    const { destination, source, draggableId } = result;
    
    //* 1 Check destiation - No Movement
    if(!destination){
      return;
    }

    //* 2 Change location check - No Movement
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId] // All data from Start Column
    const finish = state.columns[destination.droppableId] // All data from Destination Column

    console.log('\n\nDRAG MOVEMENT\n')
    console.log('Source List :',start.id)
    console.log('Destination List :',finish.id)

    //* 3 Reorder in same list
    if(start === finish){

      const newTaskIds = Array.from(start.taskIds);// ['t1', 't2', 't3', 't4']
      newTaskIds.splice(source.index,1);//Remove Source item
      newTaskIds.splice(destination.index,0,draggableId);//Add item to id to destination
  
      const newColumn = {
        ...start,
        taskIds:newTaskIds
      };

      const newState = {
        ...state,
        columns:{
          ...state.columns,
          [newColumn.id]:newColumn,
        },
      };

      setState(newState);
      console.log('State :',newState)
      return;
    }

    //* Moved to another list

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    // ? Delete from Start List
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }; 

    // ? Add to Finish List
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    // ? Update State Using both List
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
    console.log('State :',newState)
    return;
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='container'
      style={{display:'flex'}}
      >
        
        {
          state.columnOrder.map(columnId => {
            const column = state.columns[columnId]; // Column Object
            const tasks = column.taskIds.map(
              taskId => state.tasks[taskId],
            ); // Array of Tasks object

            return <List key={column.id} column={column} tasks={tasks} />;
          })
        }

</div>
    
    </DragDropContext>
  )
}

export default DragAndDrop;