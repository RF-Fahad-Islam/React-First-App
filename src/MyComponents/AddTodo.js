import React, {useState} from 'react'

export const AddTodo = (props) => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const submit =(e)=> {
e.preventDefault()
if(!title || !desc){
    alert("Title or Description must not be empty")
} else {
    props.addTodo(title, desc)
    setTitle("")
    setDesc("")
}
}
    return (
        <div className="container my-2">
<div className="card">
    <div className="card-body">

            <form onSubmit={(e)=> {submit(e)}}>
  <div className="mb-3">
    <label for="titleInput" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={e=> {setTitle(e.target.value)}} id="titleInput"/>
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" value={desc} onChange={e=> {setDesc(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-outline-success">Add Todo</button>
</form>
        </div>
    </div>
</div>
    )
}
