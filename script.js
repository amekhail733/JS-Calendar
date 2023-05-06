const calendar = document.querySelector('.calendar');
const monthName = calendar.querySelector('.month-name');
const daysContainer = calendar.querySelector('.days');
const prevButton = calendar.querySelector('.prev');
const nextButton = calendar.querySelector('.next');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date();

function updateCalendar() {
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  monthName.textContent = months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDay.getDay(); i++) {
    const emptyDiv = document.createElement('div');
    daysContainer.appendChild(emptyDiv);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    daysContainer.appendChild(dayDiv);
  }
}

prevButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

updateCalendar();
