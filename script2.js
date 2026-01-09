const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  menuItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    item.style.display = name.includes(filter) ? "" : "none";
  });
});
