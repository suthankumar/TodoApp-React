import React from 'react';
import Todo from './Todo';

const Todolist=({list,filteredList, setList})=>{
    return(
    <div className="todo-container">
        <ul className="todo-list">
            {filteredList.map((l)=>(<Todo item = {l} list= {list} setList={setList} key= {l.id} text ={l.text}/>))}
        </ul>
        
    </div>);
}
export default Todolist;