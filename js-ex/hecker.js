const message = document.getElementById("message");
const dots = document.getElementById("dots");

function randomDelay() {
  const t = Math.floor(Math.random() * 7 + 1) * 1000;
  return new Promise(resolve => setTimeout(resolve, t));
}

// DOTS animation
function startDotBlinking() {
  const states = ["", ".", "..", "..."];
  let i = 0;
  return setInterval(() => {
    dots.textContent = states[i % states.length];
    i++;
  }, 500);
}

// MAIN hacking logic
async function simulateHacking() {
  const dotInterval = startDotBlinking();

  message.textContent = "Initializing Hacking";
  await randomDelay();

  message.textContent = "Reading your Files";
  await randomDelay();

  message.textContent = "Password files Detected";
  await randomDelay();

  message.textContent = "Sending all passwords and personal files to server";
  await randomDelay();

  message.textContent = "Cleaning up";
  await randomDelay();

  clearInterval(dotInterval); // stop blinking after all done
  dots.textContent = ""; // clear the dots
  message.textContent = "Hacking Complete <3";
}

// Start when page loads
simulateHacking();
