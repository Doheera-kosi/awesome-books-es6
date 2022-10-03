import { DateTime } from './luxon.js';

const dateDisplay = document.querySelector('.time');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateDisplay.textContent = date;
};

setInterval(setTime, 1000);
