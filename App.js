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

const foodILike = [
  { id: 1 ,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  { id: 2 ,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
    },
  { id: 3 ,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.4 
    },
  { id: 4 ,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 4.2   
    },
  { id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5.0  
   }
];


function App() {
   /*component는 보다시피  html을 반환하는 함수야*/  
  return  (<div>   
            <h1>hello</h1>

            {foodILike.map(dish =><Food id = {dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>)}

           </div>
  );
        
}
export default App ;
 

