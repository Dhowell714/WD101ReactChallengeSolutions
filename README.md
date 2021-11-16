# **React Challenge Solutions** 

To begin this challenge we need to create a new React app. <br/><br/>
If you would like a refresher on that process, [React 1.2 Packages Setup](https://elevenfifty.instructure.com/courses/810/pages/1-dot-2-packages-setup?module_item_id=73836) details the commands to get started.
<br/><br/>
There is no required styling for these challenges.

---
## React Challenge 1 Prompt

React Challenge 1 - Passing Props:

1. In App.js, set up 3 state variables. One for `name`, one for `age`, and one for `hobbies`.

2. Make a components folder, and create 2 new files: `Inputs.js` & `View.js`. 

3. `Inputs.js` will be responsible for the following:
    * Accepts Props
    * Have 3 separate inputs: one for `name`, one for `age`, and one for `hobbies`
    * Each input should have it's own means of updating the state passed to it from the parent component (Data Binding)
<br/>
4. `View.js` will be responsible for the following:
    * Accepts Props
    * Have 3 `<h3>` tags: one for `name`, one for `age`, and one for `hobbies`
    * Each `<h3>` tag should display the state variable passed to it from the parent component