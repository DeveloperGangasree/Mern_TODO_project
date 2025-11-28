import React from 'react'

function Tododdata({todo,deleteTodo}) {
  return (
    <div>
      <table border="1">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>

        <tr>
          <td>{todo.title}</td>
          <td>{todo.description}</td>

          <td>
            <button onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Tododdata
