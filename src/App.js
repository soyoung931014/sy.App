import React from 'react';


function Food({name, picture}){


  return(
        <div>
        <h1> I like {name}</h1> 
         <img src = {picture} />
         </div>
  );
}

const foodILike =[

      {name: "김밥",
       image: "https://images.app.goo.gl/BuLVMU836FujHefD6" },
       {name : "떡볶이",
      image: "https://images.app.goo.gl/2bzvNmbVVWtMt7yP6"  }
]



function App() {
   /*component는 보다시피  html을 반환하는 함수야*/  
  return  (<div>   
            <h1>hello</h1>
            {foodILike.map(dish =><Food name = {dish.name} picture = {dish.image} />)}
           </div>
  );
        
}
export default App ;
 

