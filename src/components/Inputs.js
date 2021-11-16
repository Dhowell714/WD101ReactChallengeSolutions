// For this form, I have imported Reactstrap to demonstrate utilizing their library 
import { Form, FormGroup, Label, Input } from 'reactstrap';

// Declare our functional component with name that matches our file title, pass in properties shared from parent file of App.js using the parameter name of 'props' 
// (1) This satisfies the first responsibility of Input.js needing to accept props
const Inputs = ( props ) => {

    return (
    <div>
        <h4>This is the form from our Inputs.js file:</h4>
        <br/>
        {/* (2) The second responsibility of Input.js is to have three separate inputs: one for name, one for age, and one for hobbies
        I imported a Form from Reactstrap to quickly grab something visually pleasing */}
        <Form>

            {/* (2.1) This FormGroup will hold my first input for our name property. */}
            <FormGroup>
                <Label for='name'>Name:</Label>
                <Input
                    type='text'
                    name='name'
                    id='nameInput'
                    placeholder="Please enter your name"
                    // (3) Each input needs it's own means to update the state
                    // Here we can use an onChange to pass any changes in value via the input and set our state.
                    // We are diving into our props, choosing which value we want to update, and assigning it to the input's value.
                    // Here we are changing the value for name with an onChange reassigning setName from our passed props
                    onChange={(e) => props.setName(e.target.value)}
                />
            </FormGroup>

            {/* (2.2) This FormGroup will hold my second input for our age property. */}
            <FormGroup>
                <Label for='age'>Age:</Label>
                <Input
                    type='number'
                    name='age'
                    id='ageInput'
                    placeholder="Please enter your age"
                    // Here we are changing the value for age with an onChange reassigning setAge from our passed props 
                    onChange={(e) => props.setAge(e.target.value)}
                />
            </FormGroup>

            {/* (2.3) This FormGroup will hold my third input for our hobbies property. */}
            <FormGroup>
                <Label for='hobbies'>Hobbies:</Label>
                <Input
                    type='textarea'
                    name='hobbies'
                    id='hobbiesInput'
                    placeholder="Please list your hobbies"
                    // Here we are changing the value for hobbies with an onChange reassigning setHobbies from our passed props
                    onChange={(e) => props.setHobbies(e.target.value)}
                />
            </FormGroup>
        </Form>
    </div>    
    );
};

// Exporting the functional component so it can be utilized wherever it's imported
export default Inputs;