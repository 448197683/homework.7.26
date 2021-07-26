const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
console.log(h1,form,input,button);
form.addEventListener("submit",function(e){
  console.log(e);
  e.preventDefault();
  const input1 = document.querySelector(".input1")
  const input2 = document.querySelector(".input2")
  console.log(input1.value,input2.value)
  if (input1.value === "") {
    return alert("请输入");
  }
  if (input2.value === "") {
    return alert("请输入");
  }
  localStorage.setItem("name", input1.value);
  localStorage.setItem("Age",input2.value)
})
const getName = localStorage.getItem("name");
console.log(getName);
const date = new Date();
const year = date.getFullYear();
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
h2.innerHTML = `Hello ${input1.value}`
h3.innerHTML = `You're born in year-${input2.value} years`
if (getName) {
  form.classList.add("hide");
  h1.classList.add("hide");
  h2.classList.remove("hide");
  h3.classList.remove("hide");
} else {
  form.classList.remove("hide");
  h1.classList.remove("hide");
}