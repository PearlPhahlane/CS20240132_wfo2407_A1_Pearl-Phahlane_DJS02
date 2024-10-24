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

//P: to convert input values to numbers and to check for letters and special characters
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);
  const regEX = /^[a-zA-Z]+$/;

//P: add try catch block for handling errors
  try {
    if (dividerNumber === 0) {
      throw new Error(
          "Division not performed. Invalid number provided. Try again.");
    }

    if (regEX.test(dividend) || regEX.test(divider)) {
      throw new Error("Something critical went wrong. Please reload the page.");
    }

    result.innerText = Math.floor(dividendNumber / dividerNumber);

  } catch (error) {
    console.error(Error);
    
    if (error.message.includes('Invalid number')) {
      result.innerText = error.message;
    }
    if (error.message.includes('critical')) {
      document.body.innerHTML = error.message;
    }
  }
});