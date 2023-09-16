import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function add() {
    if (num1 === "" ) {
      setError("Num1 Cant Be Empty");
      setSuccess("");
      return;
    } else if (num2 === "") {
      setError("Num2 Cant Be Empty");
      setSuccess("");
      return;
    }
    let ans = parseInt(num1) + parseInt(num2);
    setSuccess("Result- " + ans);
    setError("");
  }

  function subtract() {
    if (num1 === "") {
      setError("Num1 Cant Be Empty");
      setSuccess("");
      return;
    } else if (num2 === "") {
      setError("Num2 Cant Be Empty");
      setSuccess("");
      return;
    }
    let ans = parseInt(num1) - parseInt(num2);
    setSuccess("Result- " + ans);
    setError("");
  }

  function mul() {
    if (num1 === "") {
      setError("Num1 Cant Be Empty");
      setSuccess("");
      return;
    } else if (num2 === "") {
      setError("Num2 Cant Be Empty");
      setSuccess("");
      return;
    }
    let ans = parseInt(num1) * parseInt(num2);
    setSuccess("Result- " + ans);
    setError("");
  }

  function division() {
    if (num1 === "") {
      setError("Num1 Cant Be Empty");
      setSuccess("");
      return;
    } else if (num2 === "") {
      setError("Num2 Cant Be Empty");
      setSuccess("");
      return;
    } else if (num2 === 0) {
      setError("Num2 Cant Be Zero");
      setSuccess("");
      return;
    }
    let ans = parseInt(num1) / parseInt(num2);
    setSuccess("Result- " + ans);
    setError("");
  }

  return (
    <div className="container">
      <div className="cal">
        <div className="heading">React Calculator</div>
        <div className="input">
          <input
            type="text"
            placeholder="Num1"
            onChange={(e) => setNum1(e.target.value)}
            value={num1}
          />
          <input
            type="text"
            placeholder="Num2"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </div>
        <div className="btn">
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={mul}>*</button>
          <button onClick={division}>/</button>
        </div>
        {
            error && (
                <h3 style={{color:"red"}}>Error!</h3> 
                
            )
        }
        {
            success && <h3 style={{color:"green"}}>Success!</h3>
        }
        {
            error ? <div>{error}</div> : <div style={{fontSize:"1.5rem"}}>{success}</div>
        }
      </div>
    </div>
  );
};

export default Calculator;
