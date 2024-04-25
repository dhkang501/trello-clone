import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  //onDragEnd 함수: 유저가 드래그를 끝낸 시점에 불려지는 함수
  const onDragEnd = () => {
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {() => 
        <ul>
          <Draggable draggableId="first" index={0}>
            {() => 
            <li>
              One
            </li>
            }  
          </Draggable>  
          <Draggable draggableId="second" index={1}>
            {() => 
            <li>
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