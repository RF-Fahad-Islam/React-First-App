import React from 'react'

export default function TodoItem({todo}) {
    return (
            <div className="card">
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button className="btn btn-danger">Delete</button>
  </div>
</div>
    )
}
