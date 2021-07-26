const span1 = document.querySelector(".span1")
function timer() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const dat = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  span1.innerHTML = 'Today is '+year+'-'+month+'-'+dat
  `${hours<10?`0${hours}`:`${hours}`}:${minutes}:${seconds}`
}

setInterval(timer, 1000);
timer();