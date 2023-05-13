
// See the timer increment every second once the page has loaded

document.addEventListener("DOMContentLoaded", isTimerRunning)

let timer = 1
let currentNumber = 0

const pause = document.querySelector("#pause");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const submit = document.querySelector("#comment-form");
const ul = document.querySelector("ul");
const number = 5;


minus.addEventListener("click", () => {currentNumber -= 1;
   document.querySelector("#counter").innerText = currentNumber})
plus.addEventListener("click", () => {currentNumber += 1;
   document.querySelector("#counter").innerText = currentNumber})

heart.addEventListener("click", () => handleLike())

function handleLike(){
   //console.log(ul);
   let number = 1
   let li = document.createElement("li")
   li.textContent = `${currentNumber} was liked ${number} time`
   ul.appendChild(li)

}


pause.addEventListener("click", () => {
   if (timer === 1){
      timer = 0
      console.log("clicked" + timer)
      pause.innerText = "resume"
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
   } else {
      timer = 1
      console.log("clicked" + timer)
      pause.innerText = "pause";
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      isTimerRunning()
   }
})

function isTimerRunning(){
   if (timer === 1) {
      console.log("running");
      incrementTimer();
   }  else if (timer === 0) {
      console.log("paused...")
   }
}

function incrementTimer(){
   document.querySelector("#counter").innerText = currentNumber;
   setTimeout(()=>{
      currentNumber += 1;
      console.log(currentNumber);
      //document.querySelector("#counter").innerText = currentNumber;
      isTimerRunning();
   }, 1000)
}

submit.addEventListener("click", handleSubmit);

function handleSubmit(event){
   event.preventDefault();
   const submitValue = document.getElementById('comment-input').value
   console.log(submitValue)
   let p = document.createElement("p")
   p.textContent = submitValue
   list.appendChild(p) 
   submit.reset() 
}


// --- See the timer increment every second once the page has loaded.
// --- Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// --- Pause the counter, which should:
//   ---pause the counter
//   ---disable all buttons except the pause button
//   ---switch the label on the button from "pause" to "resume"
// -- Click the "restart" button to restart the counter and re-enable the buttons.
// -- Leave comments on my gameplay, such as: "Wow, what a fun game this is."