const btnToggle = document.querySelector(".toggle");

btnToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("light-mode");
});

// gunakan syntax dibawah ini. Dibawah ini adalah Logic untuk menghilangkan bug, ketika di refresh akan tetap menyesuaikan warna theme nya.
// const body = document.querySelector("body");
// const button = document.querySelector("#toggle");

// function toggleDark() {
//   if (body.classList.contains("light-mode")) {
//     body.classList.remove("light-mode");
//     localStorage.setItem("theme", "dark-mode");
//   } else {
//     body.classList.add("light-mode");
//     localStorage.setItem("theme", "light-mode");
//   }
// }

// if (localStorage.getItem("theme") === "light-mode") {
//   body.classList.add("light-mode");
// }

// document.querySelector("#toggle").addEventListener("click", toggleDark);
