// Importing our css stylesheet
import './App.css';
// Importing Bootstrap's styling library
import 'bootstrap/dist/css/bootstrap.css';
// Importing useState into the project from React so it can be used to set and pass state variables
import { useState } from 'react';
// Importing our Inputs component for use in app
import Inputs from './components/Inputs';
// Importing our View component for use in app
import View from './components/View';

function App() {

  // [1] First instruction after creating app is to: In App.js, set up 3 state variables. One for name, one for age, and one for hobbies.

  // Declaring and constructing the three state variables with the proper syntax as instructed:
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ hobbies, setHobbies ] = useState('');

  // [2] The next instruction asks us to create our components folder with our Inputs.js file and View.js file.
  // They each have three steps to complete before being imported here to access and use them.

  return (
    <div className="App">
      <h1>React Challenge One:</h1>
      {/* We call our import variables to use and display their component contents to the app. */}

      {/* We pass Inputs the "setting" variables of our state so they will be accessible in the Inputs component to change the values */}
      <Inputs setName={setName} setAge={setAge} setHobbies={setHobbies}/>

      {/* We pass View the "value" variables of our state so they will be accessible in the View component to display the value of each property as it's changed by Inputs */}
      <View name={name} age={age} hobbies={hobbies}/>
    </div>
  );
}

export default App;