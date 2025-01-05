let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

// DOM elements
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps-list');

// Function to update the timer display
function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    interval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  clearInterval(interval);
  isRunning = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  updateDisplay();
  lapsList.innerHTML = ''; // Clear laps
}

// Function to record a lap time
function recordLap() {
  if (isRunning) {
    const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
}

// Event listeners
document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
document.getElementById('lap-btn').addEventListener('click', recordLap);

// Initialize the display
updateDisplay();
