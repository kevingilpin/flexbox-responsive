window.addEventListener('DOMContentLoaded', (event) => {
  const icon = document.querySelector('.icon');
  const links = document.querySelector('ul');
    
  icon.addEventListener("click", () => {
    if (links.className === "mobile-hidden") {
      links.className = "mobile-shown";
    } else {
      links.className = "mobile-hidden";
    }
  });
});