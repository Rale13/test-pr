document.addEventListener("DOMContentLoaded", function () {
  const tableCells = document.getElementsByTagName("td");
  for (let i = 0; i < tableCells.length; i++) {
    const cell = tableCells[i];

    cell.addEventListener("click", function () {
      cell.classList.toggle("done");
    });
  }
});
