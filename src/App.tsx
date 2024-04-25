import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  //onDragEnd 함수: 유저가 드래그를 끝낸 시점에 불려지는 함수
  const onDragEnd = () => {
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(provided) => 
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          <Draggable draggableId="first" index={0}>
            {(provided) => 
            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              {/* <span {...provided.dragHandleProps}>🥰</span> */}
              One
            </li>
            }  
          </Draggable>  
          <Draggable draggableId="second" index={1}>
            {(provided) => 
            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              {/* <span {...provided.dragHandleProps}>🥰</span> */}
              Two
            </li>
            }  
          </Draggable>  
        </ul>
        }
      </Droppable>
    </DragDropContext>
  );
}

export default App;