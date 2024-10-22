/* eslint-disable @typescript-eslint/no-unused-expressions */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  (dividend === "" || divider === "") ? result.innerText = `Division not performed. Both values are required in inputs. Try again.` : result.innerText = Math.floor(dividend / divider); //P: round down value and assin the value directly to result.innerText

});