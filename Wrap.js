import React, { useState, useEffect } from "react";

const Wrap = () => {
  const setMinimumTime = () => {
    setTimeout(() => {
      console.log("abc")
    }, 5000)
  }


  return (
    <div>
      
      <button onClick={setMinimumTime}>Increment</button>
    </div>
  );
}

export default Wrap
