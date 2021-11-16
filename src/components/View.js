// Declare our functional component with name that matches our file title, pass in properties shared from parent file of App.js using the parameter name of 'props' 
// (1) This satisfies the first responsibility of Input.js needing to accept props
const View = (props) => {

    return (
        <div>
            <h4>This is the View.js displaying the current state of each property:</h4>
            <br/>
            {/* (2 & 3) Have 3 <h3> tags for each property that displays the state variable passed to it from the parent component/file */}
            {/* We dive into our parameter of props with dot notation to display which property value we want to view on the page */}
            {/* The setName from Inputs.js changes the state value of name in our App.js, the App.js then passes that value via props to this component so props.name will equal the most recent value from our name input of the form. */}
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Hobbies: {props.hobbies}</h3>
        </div>
    )
};

// Exporting the functional component so it can be utilized wherever it's imported
export default View;