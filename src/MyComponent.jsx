import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivered");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter">
        <p className="display">{count}</p>
        <button onClick={increment} className="button">
          Increment
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
        <button onClick={decrement} className="button">
          Decrement
        </button>
      </div>
      <br />
      <br />
      <br />

      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity:{quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter delivery instructions"
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Master Card</option>
          <option value="Giftcard">Gift Card</option>
        </select>
        <p>Paymennt:{payment}</p>

        <label>
          <input
            type="radio"
            value="Pick up"
            checked={shipping === "Pick up"}
            onChange={handleShippingChange}
          />
          Pick up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping Status: {shipping}</p>
      </div>
    </>
  );
}

export default MyComponent;
