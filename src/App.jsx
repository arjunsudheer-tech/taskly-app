import './App.css'
import { useState } from 'react'

const App = () => {

  const [toDos , setToDos] = useState([]);
  const [toDo , setToDo] = useState('');

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const handleAddToDo = () => {

    if(!toDo.trim()) {
      return;
    }
    
    const newToDo = {
      id: Date.now(),
      text: toDo,
      status: false
    }

    setToDos([...toDos,newToDo]);
    setToDo('');
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleAddToDo();
    }
  }

  const handleCheckBox = (id , checked) => {
    setToDos(
      toDos.map((todo) => {
        if(todo.id === id) {
          return ({
            ...todo,
            status: checked
          });
        }

        return todo;
      })
    )
  }
  
  const handleDeleteToDo = (id) => {
    setToDos(
      toDos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className='app-container'>

      <div className="main-heading">
        <h1>Taskly App</h1>
      </div>

      <div className="app-input">
        <input 
          type="text" 
          value={toDo}
          placeholder="Enter todo item ..." 
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>

      <div className="todos">

      {toDos.map((todo) => {
        return(
        <div className="todo" key={todo.id}>
          <div className="left">
            <input 
              type="checkbox" 
              checked={todo.status}
              onChange = {(e) => handleCheckBox(todo.id,e.target.checked)}
            />
              {todo.status ? (
                <del>{todo.text}</del>
              ) : (
                <p>{todo.text}</p>
              )}
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={() => handleDeleteToDo(todo.id)}></i>
          </div>
        </div>
        );
      })
      }
      </div>
    </div>
  )
}

export default App