import './App.css';
import React, {useState} from "react"

function App() {
  // set the initial state
  const[count, setCount] = useState(0)
  // set the initial state for name. Good for single input date
  // const[name, setName] = useState("")

  // set state for multiple inputs. destructing useState
  // usestate({}) --> set a list of states
  const[input, setInputs] = useState({})
  
// function to open an alert dialog when form is submitted 
const submitform = function(event){
  event.preventDefault()
  alert(`Welcome to React State ${setInputs.username}. Your lucky number is ${setInputs.luckynumber}`)

}

  // function to handle the changes in all inputs
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
  }
  return (
    <>
      <h1>Lab 14, React state</h1>
      <p>Count = {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment the count</button>
      <button onClick={()=>setCount(0)}>Reset Button</button>

      <h1>Form application using state</h1>
      <form>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <label for="username">Enter your name: </label>
          <input
            type='text'
            id='username'
            name = 'username'
            value = {inputs.username}
            onChange={(e)=>setName(e.target.value)}
            />
            {/**submit form */}
            <input type='submit'/>
        </fieldset>
      </form>
      {/**test data in the form after submission */}
      <p>Name = {name}</p>
    </>
  );
}

export default App;
