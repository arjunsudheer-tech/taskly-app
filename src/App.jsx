import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <div className="main-heading">
        <h1>Taskly App</h1>
      </div>
      <div className="app-input">
        <input type="text" placeholder="Enter todo item ..." />
        <i className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" />
            <p>React tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App