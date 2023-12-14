const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const btnGlow1 = document.querySelector(".get-started-btn");
const btnGlow2 = document.querySelector(".upgrade-to-pro-btn");
const btnGlow3 = document.querySelector(".go-ultimate-btn");

function addGlowEffect(element, color) {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const gradientX = (mouseX / element.clientWidth) * 100;
    const gradientY = (mouseY / element.clientHeight) * 100;

    element.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, transparent 20%, ${color} 70%)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.background = `${color}`; // Reset to the original background color
  });
}

addGlowEffect(btnGlow1, "#000");
addGlowEffect(btnGlow2, "#000");
addGlowEffect(btnGlow3, "#000");
addGlowEffect(card1, "#262626");
addGlowEffect(card2, "#262626");
addGlowEffect(card3, "#262626");
