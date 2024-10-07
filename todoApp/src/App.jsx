// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
