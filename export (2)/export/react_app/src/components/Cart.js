import React, { useState,useEffect } from 'react';

function Cart(props) {
    const [cart,setCart]=useState([])
    var unique=[]
    var cartAmount=0;
    var increaseItm=[]
    


     useEffect(() => {
       fetch("http://localhost:7777/cart")
         .then((response) => response.json())
         .then((data) => setCart(data))
         .catch((error) => console.log(error));
     },cart);


 //to calculate total amount
    const toadd=(()=>{cart.map((eachPrice)=>cartAmount+=eachPrice.price)})()



//setting value to increase the qty
  const assignValue = (piz) => {
    increaseItm = {
      id: piz.id,
      type: piz.type,
      price: piz.price,
      name: piz.name,
      image: piz.image,
      description: piz.description,
      ingredients: piz.ingredients,
      topping: piz.topping,
    };
  };

//to increase qty
const increase=()=>{
  fetch("http://localhost:7777/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(increaseItm),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Task added successfully");
        increaseItm=[]
      } else {
        console.error("Error adding task");
      }
    })
    .catch((error) => console.log(error));

}     


//to decrese qty
const decrease=(pizzaId)=>{
    console.log(pizzaId); 
    fetch(`http://localhost:7777/cart/${pizzaId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }


    return (
      <div>
        {cart.length !== 0 ? (
          <div>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>
                    Veg&nbsp;-&nbsp;
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "green",
                        display: "inline-block",
                      }}
                    ></div>
                    &nbsp; / &nbsp;Non-Veg&nbsp;-&nbsp;&nbsp;
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "red",
                        display: "inline-block",
                      }}
                    ></div>
                  </th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(
                  (cartMap) => {
                    if (!unique.includes(cartMap.id)){
                    unique=[...unique,cartMap.id]
                      return (
                        <tr key={cartMap._id}>
                          <td className="h6"> {cartMap.name}</td>
                          <td>
                            <img
                              height={75}
                              width={100}
                              src={cartMap.image}
                              alt="pizza"
                            ></img>
                          </td>
                          <td>
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor:
                                  cartMap.type === "veg" ? "green" : "red",
                                display: "inline-block",
                              }}
                            ></div>
                            <br />
                            <br />
                          </td>
                          <td>
                            {cartMap.price}
                            {/* {(cartAmount = cartAmount + cartMap.price)} */}
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                decrease(cartMap.id);
                              }}
                              className="btn btn-danger"
                            >
                              -
                            </button>
                            &nbsp;&nbsp;
                            {
                              cart.filter((each) => each.id === cartMap.id)
                                .length
                            }
                            &nbsp;&nbsp;
                            <button
                              onClick={() => {
                                assignValue(cartMap);
                                increase();
                              }}
                              className="btn btn-success"
                            >
                              +
                            </button>
                          </td>
                          <td>
                            {cartMap.price *
                              cart.filter((each) => each.id === cartMap.id)
                                .length}
                          </td>
                        </tr>
                      );}}
                  
                )}
              </tbody>
            </table>
            <h5>No.of Pizzas : {cart.length}</h5>
            <h5>Total Cost: {cartAmount}</h5>
          </div>
        ) : (
          <div> <h1>Your Cart is empty </h1>
          <h2>Add items to your cart to proceed</h2>
          </div>
        )}
      </div>
    );
}

export default Cart;