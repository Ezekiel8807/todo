import './App.css';
import { useState } from 'react'


function App() {

  const [todo, setTodo] = useState('');

  const chandleTodo = (x) => {
    x.preventDefault();

    if(!todo){
        alert('Enter todo');

    }else {
      const inputTodo = document.getElementById('todo')
      const ul = document.getElementById('todos');
      const li = document.createElement('li');
    
      li.innerHTML = todo;
      ul.appendChild(li);
      inputTodo.value = '';

      li.addEventListener('dblclick', () => {
        ul.removeChild(li)
      })
      
    }
  }

  //get all todo

  return (
    <div className="App">
      <header>
        <p>Todo App</p>
      </header>

      <main>
          <div className="main-box">
              <form onSubmit={ chandleTodo } id="handleTodo" className="add-todo" method="post">
                  <input onChange={ (e) => { setTodo( e.target.value)}} id="todo" className="todo-input" type="text" placeholder="Enter todo"/> 
                  <input className="todo-btn" type="submit" value="Add"/>
              </form>
                
              <ul id="todos" className="todos">
              </ul>
          </div>
      </main>

      <footer>
          <p className="">&copy; copyright 2022. &lt;/&gt; with love by <a href="/">Ezefizzy</a></p>
      </footer>
    </div>
  );
}
 

export default App;
