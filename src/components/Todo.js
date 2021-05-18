import React from 'react';

const Todo=({text, list, item, setList})=>{
    const deleteItem =()=>{
        setList(list.filter(el=> el.id !== item.id))
    }
    const completeItem =()=>{
        setList(list.map(el=> {
            if (el.id === item.id){
                return{
                    ...el, completed: !el.completed
                };
            }
            return el;
        }))
    }
    return(
    <div className="todo">
        <li className={`todo-item ${item.completed ? 'completed' : ''}`} >{text}</li>
        <button onClick ={completeItem} className="complete-btn"> <i className= "fas fa-check"> </i></button>
        <button onClick ={deleteItem}className="trash-btn"> <i className= "fas fa-trash"> </i></button> 
    </div>
    );
}
export default Todo;