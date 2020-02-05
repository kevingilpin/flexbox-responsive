window.addEventListener('DOMContentLoaded', (event) => {
  const icon = document.querySelector('.icon');
  const links = document.querySelector('ul');
    
  icon.addEventListener("click", () => {
    if (links.className === "off") {
      links.className = "on";
    } else {
      links.className = "off";
    }
  });
});