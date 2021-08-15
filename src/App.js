import React from 'react';
import PropTypes from "prop-types"


function Food({name, picture ,rating}){


  return(
        <div>
        <h1> I like {name}</h1> 
        <h3>{rating}/5</h3>
         <img src = {picture} alt = {name} />
         </div>
  );
}




class App extends React.Component{
  
  render(){

    return <h1> I'm a class component</h1>

  }
}export default App;

