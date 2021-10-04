import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container my-2">
            <h1 className="text-center">Your Todo</h1>
            <hr />
            
            {props.todos.map((todo)=> {
            return <TodoItem todo={todo} onDelete={props.onDelete}/>
            })}
        </div>
    )
}
