import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 

function Build(props) {
    
    const [customPizza, setCustomPizza] = useState([]);
    const [price,setPrice]=useState(0)
    var buildCustPizza=[]
    const [count,setCount]=useState(1);
    const [veg,setVeg]=useState("veg");


     useEffect(() => {
       fetch("http://localhost:7777/ingredients")
         .then((response) => response.json())
         .then((data) => setCustomPizza(data))
         .catch((error) => console.log(error));
     }, []);
 
     const onCheckBoxChecked=(event,cost,name)=>{
       // console.log(event.target.checked)
       if (event.target.checked == true) {
         setPrice(price + cost);
         console.log(name)
         if (name==="Chicken" || name=="Pepperoni"){
          setVeg("nonveg")

         }

       }
       else {
         setPrice(price - cost);
         if (name === "Chicken" || name == "Pepperoni") {
           setVeg ("veg");
         }
       }
     }

     const addvalue=()=>{
      setCount(count+1)
     }

     const assignValue=(price)=>{
      console.log(count)
      buildCustPizza={
      id: "100"+count,
      type: veg,
      price: price,
      name: "Customized Pizza "+count,
      image: "https://brosgiantpizza.com/wp-content/uploads/2016/08/custom-pizza.png",
      description: "customised pizza",
      ingredients: [],
      topping: [],

     }}

     
const buildButton = () => {
  fetch("http://localhost:7777/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildCustPizza),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task added successfully");
        buildCustPizza = [];
      } else {
        console.error("Error adding task");
      }
    })
    .catch((error) => console.log(error));
};     


    return (
      <div>
        <h1>Build Your Pizza</h1>
        <table className="table table-striped table-bordered">
          <tbody>
            {customPizza.map((items) => (
              <tr key={items.id}>
                <td>
                  <img
                    src={items.image}
                    width={100}
                    height={75}
                    alt="ingredients"
                  />
                </td>
                <td>
                  {items.tname} &nbsp; ₹{items.price.toFixed(2)}
                </td>
                <td className="text-warning">
                  <input
                    type="checkbox"
                    onChange={(event) => onCheckBoxChecked(event, items.price,items.tname)}
                  ></input>
                  &nbsp; &nbsp; Add
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="text-left">Total Cost : {price}</h3>
        <button
          onClick={() => {
            addvalue();
            assignValue(price);
            buildButton();
          }}
          className="text-warning btn btn-dark"
        >
          Build Ur Pizza
        </button>
      </div>
    );
}

export default Build;