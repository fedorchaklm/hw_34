import './App.css'
import { useState } from 'react';
import UserName from './components/UserName'

function App() {
  const [userName, setUserName] = useState('');
  const [inputUserName, setInputUserName] = useState('');

  function getUserName(event) {
    setInputUserName(event.target.value);
  }

  function handlerSubmit(event) {
    event.preventDefault();
    setUserName(inputUserName);
    setInputUserName('');
  }

  return (
    <div>
      <UserName name={userName}></UserName>
      <form onSubmit={handlerSubmit}>
        <input
         type="text" 
        name="userName" 
        onChange={getUserName} 
        placeholder='Enter your name' 
        value={inputUserName}>
        </input>
        <button type="submit">Click</button>
      </form>
    </div>
  )
}

export default App