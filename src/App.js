import React from 'react';


function Food(props){


  return <h1> I like {props.fav}</h1>;
}

function App() {
   /*component는 보다시피  html을 반환하는 함수야*/  
  return  (<div>   
            <h1>hello</h1>
            <Food 
            fav = "kimchi"
            something = {true}
            papapa = {["hello",123,true]} />
           <Food fav= "lamen" />
           <Food fav= "coffee" />
           <Food fav= "potato" />
           </div>
  );
        
}
export default App ;
 

