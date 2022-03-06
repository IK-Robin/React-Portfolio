import { useState } from 'react';


const Todo = ({todoes,completeTodo}) => {
  const [edit, setEdit] = useState({
    id:null,
    value:''
  });
  return todoes.map((todo,index) =>{
<div className={todo.isComplete ? 'todo-row complete' :'todo-row'  } key={index}> 

    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
      {todo.text}
    </div>
    <div className='icons'>
      {/* <RicloseCircleLine/>
      <TiEdit/> */}
    </div>

 </div>
  })
}

export default Todo;