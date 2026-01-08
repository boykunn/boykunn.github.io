alert("JavaScript berhasil terhubung!");
const heroImg = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroImg.style.transform = `translateY(${scrollY * 0.2}px)`;
});
