// document.body.addEventListener('click',(e) => {
//   console.log(e.button);
//   console.log(e.buttons)
// })

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e)
  if(e.code.toLocaleLowerCase()=== "enter")
      alert(
      "엔터 불가능"
    )
  
  if (
    e.code.toLocaleLowerCase() === "backspace"
  )
  alert (
    "사이트를 빠져나갈 수 있어서 금지"
  )
})