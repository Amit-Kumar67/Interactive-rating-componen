const rating = document.querySelectorAll("input[type='radio']");
const btn = document.querySelector("#btn");
const body = document.body
const box = document.querySelector("#box")
const rating_button = document.querySelectorAll('.rating_button')
const result = document.querySelector("#result")
const front = document.querySelector("#front")
const back = document.querySelector("#back")


btn.addEventListener("click", () => {
  front.style.display = "none"
    back.style.display = "flex"
  rating.forEach((elm) => {
    if (elm.checked === true) {
        console.log(elm.value)   
        result.innerHTML = `You selected ${elm.value} out of 5`
    }
  });
});


rating.forEach((el, index) => {
  let active = 1;
  el.addEventListener("click", (e) => {
    active = e.target.value;
    rating.forEach((elm, index) => {
      if (elm.value === active) {
        rating_button[index].classList.add("activeOrange");
      } else {
        rating_button[index].classList.remove("activeOrange");
      }
    });
  });
});
