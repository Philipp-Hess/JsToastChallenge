console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = "abcde";

  toastContainer.append(toast);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";

  // Exercise: Clear the stack of toast messages
});

const testButton = document.querySelector('[data-js="test-button"]');

testButton.addEventListener("click", () => {
  const test = document.createElement("button");
  test.classList.add("test");
  test.textContent = "Hi im a Button";
  document.body.append(test);
});
