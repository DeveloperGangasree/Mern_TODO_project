import React, { useState, useEffect } from 'react';
import axios from '../axios'
import Tododdata from '../Components/Tododdata';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Home() {
  /** @type {Array<any>} */
  const swal = withReactContent(Swal);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getTodos = async () => {
    try {
      const res = await axios.get()
      setTodos(res.data);
      console.log(res.data)


    } catch (error) {
      console.log(error)
    }
  }
  const createTodo = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('/create', { title, description })
      setTitle('')
      setDescription()
      swal.fire("Good job!", "You added a new todo!", "success");
      getTodos();
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }
  const deleteTodo = async (id) => {
    try {
      console.log(id)
      let resu =await axios.delete(`/delete/${id}`,{title,description})
      swal.fire("Todo Deleted!", "You Successfully a deleted a todo!", "successfully");
      getTodos();
      console.log(resu)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTodos();
  }, []);


  return (
    <div>
      <h1>Welcome home</h1>
      {todos?.map((todo, index) => (
        <Tododdata todo={todo} key={index} deleteTodo={deleteTodo} />

      ))
      }

      <form onSubmit={createTodo}>
        <input type="text" placeholder="title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} /><br></br>
        <textarea name="descp" placeholder='Description' rows="10" cols="30" value={description} onChange={(e) => setDescription(e.target.value)} /><br></br>
        <input type="submit" value="Submit" />
      </form>



    </div>
  )



}

export default Home
