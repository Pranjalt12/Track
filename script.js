const today = new Date();
const dateCells = document.querySelectorAll(".days-left");

dateCells.forEach(cell => {
  const examDate = new Date(cell.parentNode.querySelector("td:nth-child(2)").textContent);
  const diffInMiliseconds = Math.floor(examDate - today);
  // Add 1 day in milliseconds to account for potential rounding error
  const daysLeft = Math.floor(diffInMiliseconds / (1000 * 60 * 60 * 24) + 1);
  cell.textContent = daysLeft;
});