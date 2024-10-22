/* eslint-disable @typescript-eslint/no-unused-expressions */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //P: to check if inputs are empty 
  if (dividend === "" || divider === "") {
    result.innerText = `Division not performed. Both values are required in inputs. Try again.`;
    return;
  } 

//P: to convert input values to numbers
const dividendNumber = Number(dividend);
const dividerNumber = Number(divider);
const regEX = /^[a-zA-Z]+$/;


//P: to check for division by 0
if(dividerNumber === 0) {
  result.innerText = `Division not performed. Invalid number provided. Try again.`;
  console.error(`Division not performed. Invalid number provided. Try again.`);
} else if (regEX.test(dividend) || regEX.test(divider)) {
    document.body.innerHTML = `Something critical went wrong. Please reload the page.`;
    console.error(new Error("Critical error: something went wrong."));
  } else {
  result.innerText = Math.floor(dividendNumber / dividerNumber);
}
});