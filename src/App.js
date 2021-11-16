// Importing our css stylesheet
import './App.css';
// Importing Bootstrap's styling library
import 'bootstrap/dist/css/bootstrap.css';
// Importing useState into the project from React so it can be used to set and pass state variables
import { useState } from 'react';

function App() {

  // [1] First instruction after creating app is to: In App.js, set up 3 state variables. One for name, one for age, and one for hobbies.

  // Declaring and constructing the three state variables with the proper syntax as instructed:
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [hobbies, setHobbies ] = useState('');

  // [2] The next instruction asks us to create our components folder with our Inputs.js file and View.js file.
  // They each have three steps to complete before being imported here to access and use them.

  return (
    <div className="App">
      <h1>React Challenge One:</h1>
      
    </div>
  );
}

export default App;
