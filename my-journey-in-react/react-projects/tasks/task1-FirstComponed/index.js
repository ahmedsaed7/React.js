"import React from 'react'; function App() { return ( <div> <h1>Hello, World!</h1>    <MyComponent message='Hello from MyComponent!' /> </div> );}export default App;"


"import React from 'react';function MyComponent({ message }) { return (<div> <h1>{message}</h1> </div>);}export default MyComponent;"