const countdown = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 20); // Set end date 20 days from now
  const endTime = endDate.getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "The time has come!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
          <span class="time-segment">${days}d</span>
          <span class="separator">:</span>
          <span class="time-segment">${hours}h</span>
          <span class="separator">:</span>
          <span class="time-segment">${minutes}min</span>
          <span class="separator">:</span>
          <span class="time-segment">${seconds}s</span>
      `;
  }, 1000);
};

countdown();
