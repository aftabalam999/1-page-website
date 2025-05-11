const clockTime = document.querySelector("h2");

setInterval(()=>{
   let date = new Date();
   clockTime.innerHTML = date.toLocaleTimeString();
},1000)