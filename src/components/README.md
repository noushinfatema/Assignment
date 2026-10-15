Project Name : DevStack - The web learning platform.

Project description : DevStack is a interactive web learning platform that focuses on improving skills necessary for a web developer to build a successful career.

Technologies used :
This project is built using latest frontend tools such as React, Typescript, Tailwind CSS, React-toastify and React Icons.

3 features about the project : 
  -- DevStack is a fully responsive website across mobile, desktop or tablet devices, this feature is added by using Tailwind CSS
  -- There is functional side stack bar behind the technology cards. Once a card is added to the cart, it will be on the side stack bar and also the seleected card button will be disabled. Any items in the card can be removed by clicking the "x" icon. Also the whole card can be emptied by clicking the "Remove All" button
  -- When a technology is added to the cart or removed from the cart, a notification pops up . Also the Navbar always stays at top while scrolling down the website.

Questions : 
What is JSX, and why is it used in React?
--JSX stands for Javascript XMl which is used in react to write HTML syntax in Javascript functions for describing the UI design

What is the difference between props and state?
--Props are used in react for passing data from parent component to child component whereas state is create and managed inside a component

What does the useState hook do, and where did you use it in this project?
--It is a react function that allows functional components to store and update data that change over time. "useState" is used inside App.tsx to keep the track technologies that user added to the stack.

What does the useEffect hook do, and why did you need it to load the JSON data?
--useEffect acts as sideeffects for react functional components that allows fetching data, updatring DOM setting up timers etc. JSON data was needed to prevent the infinite loop.

Why does every item in a .map() list need a unique key prop?
--React stores data in memory through the unique key(typically product id) to identify the specific item.That's why unique key prop is needed for .map().

What is conditional rendering? Show one place you used it (example: the empty stack message)
--Conditional rendering is showing certain UI design based on conditions.I used it in my sideStack component to check if the array is empty or not.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
--A parent component passes data to child via props as for property.If a parent sends a callback function as props to the child, the child can send something back to the parent.

