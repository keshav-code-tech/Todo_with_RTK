import React, { useEffect } from 'react'
import { addtodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
function Addtodo () {

    const [Value,setValue] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addtodo(Value));
        setValue("");
    }

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem("todos"))
        if(storedValue) {
            storedValue.map((todo) => {
                dispatch(addtodo(todo.text));
            })
        }
    },[])

    return(
        <>
            <input type="text" value={Value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSubmit} >Click</button>
        </>
    )

}
export default Addtodo;