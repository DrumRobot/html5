/* clock/clock.js */
setInterval(function() {
  let date = new Date(); // 현재 날짜와 시간
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  document.querySelector('#clock').innerText = `${hours}:${minutes}:${seconds}`;
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
