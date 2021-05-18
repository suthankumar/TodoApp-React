import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  
  //RUN ONCE when the app start
  useEffect(()=>{
        getList();
  },[])
  
  //User effect, it run everytime it start and everytime anychanegs happen to list, status
  useEffect(()=>{
    console.log("hey");
    filterHandler();
    saveList();
  },[list, status])

  //Function
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredList(list.filter(el => el.completed === true));
        break;
      case 'uncompleted':
        setFilteredList(list.filter(el => el.completed === false));
        break;
      default:
        setFilteredList(list);
        break;
    }
  }

  //store into Local storage
  const saveList =()=>{
      localStorage.setItem('todos', JSON.stringify(list));
  };

  //store into Local storage
  const getList =()=>{
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      setList(JSON.parse(localStorage.getItem('todos')));
    }
  };


  return (
    <div className="App">
       <header>
  <h1>Sutharshan's Todo List</h1>
    </header>
    <Form inputText={inputText}list={list} setList={setList} setInputText = {setInputText}
    status= {status} setStatus={setStatus} />
    <Todolist filteredList= {filteredList} list= {list} setList={setList} />
    </div>
  );
}

export default App;
