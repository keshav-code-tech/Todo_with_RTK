import React, { useState } from "react";  
import { useSelector, useDispatch } from "react-redux";  
import { removetodo, updatetodo } from "../features/todo/todoSlice";  

function Todos() {  
  const todos = useSelector((state) => state.todos);  
 
  const [editInfo, setEditInfo] = useState({ id: null, value: "", isEditing: false });  
  const dispatch = useDispatch();  

  const Edite = (todo) => {  
    if (editInfo.id === todo.id) {  
     
      if (editInfo.isEditing) {  
      
        dispatch(updatetodo({id: todo.id, text: editInfo.value }));  
      }  
      setEditInfo({ id: null, value: "", isEditing: false });
    } else {  
      setEditInfo({ id: todo.id, value: todo.text, isEditing: true }); 
    }  
  };  

  const handleChange = (e) => {  
    
    setEditInfo({ ...editInfo, value: e.target.value });  
  };  

  return (  
    <>  
      {todos.map((todo) => (  
        <li key={todo.id}>  
          <input  
            type="text"  
            value={editInfo.id === todo.id ? editInfo.value : todo.text}  
            onChange={handleChange}  
            readOnly={!editInfo.isEditing || editInfo.id !== todo.id}  
          />  
          <button onClick={() => Edite(todo)}>{editInfo.isEditing && editInfo.id === todo.id ? "Save" : "Edit"}</button>  
          <button onClick={() => dispatch(removetodo(todo.id))}>X</button>  
        </li>  
      ))}  
    </>  
  );  
}  

export default Todos;
