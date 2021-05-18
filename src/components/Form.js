import React from 'react';
const Form=({setInputText, setList, list, inputText, setStatus})=>{
    const inputTextHandler =(e) =>{
        setInputText(e.target.value)
    };
    const sumbit =(e) =>{
        e.preventDefault();
        if (inputText !== ""){
          setList([...list, {text: inputText, completed:false, id: Math.random() }])
        } else{
            alert("Please enter the new task in the textfield to add")
        }
    };
    const statusHandler =(e) =>{
        console.log(e.target.value)
        setStatus(e.target.value)
    };

    return(
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick ={sumbit}className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler}  name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form> 
    );
}
export default Form;