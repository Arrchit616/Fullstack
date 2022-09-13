import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  
  const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Aman', number: '040-123456', id: 1 },
      { name: 'mohit', number: '39-44-5323523', id: 2 },
      { name: 'skash', number: '12-43-234345', id: 3 },
      { name: 'gyrf', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <form>
        <div>name: <input /></div>
        <div>number: <input /></div>
        <div><button type="submit">add</button></div>
        </form>

      </div>
    )
  }
}
export default App;
