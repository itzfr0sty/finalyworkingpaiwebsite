const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", function() {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  };
});