import React, { useState, useEffect } from "react";

function Order(props) {
  const [pizza, setPizza] = useState([]);
  let cartItm={
    id: "",
    type: "",
    price: 0,
    name: "",
    image: "",
    description: "",
    ingredients: [],
    topping: [],
  };

  useEffect(() => {
    fetch("http://localhost:7777/pizzas")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.log(error));
  }, []);

  const assignValue = (piz) => {
    cartItm={
      id: piz.id,
      type: piz.type,
      price: piz.price,
      name: piz.name,
      image: piz.image,
      description: piz.description,
      ingredients: piz.ingredients,
      topping: piz.topping,
    }
  };

  // To handle add to cart button
  const handleSubmit = () => {
    console.log(cartItm);
    fetch("http://localhost:7777/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItm),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Task added successfully");
          cartItm={
            id: "",
            type: "",
            price: 0,
            name: "",
            image: "",
            description: "",
            ingredients: [],
            topping: [],
          };
        } else {
          console.error("Error adding task");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div
        className="container"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div className="row border">
          {pizza.map((piz) => (
            <div
              className="col-md-6 border border-top-10 border-start-10 border-secondary"
              key={piz._id}
            >
              <div key={piz._id}>
                <table key={piz._id}>
                  <tbody key={piz._id}>
                    <tr key={piz._id}>
                      <td>
                        <h6>{piz.name}</h6>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor:
                              piz.type === "veg" ? "green" : "red",
                            display: "inline-block",
                          }}
                        ></div>
                        <br />
                        <br />
                        <b> ₹{piz.price}</b>
                      </td>
                      <td>
                        <p className="text-start"> {piz.description}</p>
                        <p className="text-start">
                          <b>Ingredients: </b>
                          {piz.ingredients}
                        </p>
                        <p className="text-start">
                          <b>Toppings:</b> {piz.topping.join(",")}
                        </p>
                      </td>
                      <td>
                        <img
                          src={piz.image}
                          className="img-fluid"
                          style={{ height: "75px", width: "75px" }}
                          alt="pizza"
                        />
                        <button
                          className="btn btn-warning"
                          // style={{
                          //   marginTop: "10px",
                          //   color: "white",
                          //   backgroundColor: "orange",
                          // }}
                          onClick={() => {
                            assignValue(piz);
                            handleSubmit();
                          }}
                        >
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;