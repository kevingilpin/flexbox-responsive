window.addEventListener('DOMContentLoaded', (event) => {
  const icon = document.querySelector('header .icon');
  const nav = document.querySelector('nav ul.mobile-hidden');
    
  icon.addEventListener("click", () => {
    if (nav.className.includes("mobile-hidden")) {
      nav.className = nav.className.replace("mobile-hidden", "mobile-shown");
    } else {
      nav.className = nav.className.replace("mobile-shown", "mobile-hidden");
    }
  });
});