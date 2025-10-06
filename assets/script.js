const rates = document.querySelectorAll(".rate__items span");
const rate = document.getElementById("rate");
const form = document.getElementById("form__submit");
const feedBack = document.getElementById("feedback");
const span = document.querySelector(".feedback h2 span");

let selected = "";

rates.forEach((item) =>
  item.addEventListener("click", () => {
    handleClick(item);
  })
);

function handleClick(item) {
  rates.forEach((elem) => {
    elem.classList.remove("active");
  });
  item.classList.add("active");
  selected = item.innerText;
}

form.addEventListener("click", () => {
  if (!selected) {
    alert("You Must Select A Value");
    return;
  }
  span.innerText = selected;
  rate.classList.add("hidden");
  feedBack.classList.add("visible");
});
