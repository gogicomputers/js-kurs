"use strict";
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener("DOMContentLoaded", () => {
   const count = document.getElementById("count");
   const reset = document.getElementById("reset");
   const number = document.getElementById("number");
  const onClickCount = () => {
    number.innerText++;
  };
  const onClickReset = () => {
    number.innerText = 0;
  };
  
  count.addEventListener("click", onClickCount);
  reset.addEventListener("click", onClickReset);
});