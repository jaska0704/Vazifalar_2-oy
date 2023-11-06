(function init() {
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let minutes = Math.floor((t / 1000 / 60) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function initializeClock(endtime) {
    let timeinterval = setInterval(function () {
      let t = getTimeRemaining(endtime);
      document.querySelector(".days > .value").innerText = t.days;
      document.querySelector(".hours > .value").innerText = t.hours;
      document.querySelector(".minutes > .value").innerText = t.minutes;
      document.querySelector(".seconds > .value").innerText = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }
  initializeClock(new Date().getFullYear() + 1 + "/1/1");
})();
